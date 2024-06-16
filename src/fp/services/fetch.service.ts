import { isEmptyString } from '@sindresorhus/is'
import { readFile } from '../effects/fs.effect.js'
import { pipe } from 'remeda'
import { map, split, trim, andThen, otherwise } from 'ramda'
import { match } from 'ts-pattern'

export type FromCSV<T> = (values: Array<string>) => Promise<T>

export const fetchAll = <T>(fromCSV: FromCSV<T>) => async (path: string): Promise<Array<T>> => {
  return pipe(
    readFile(path),
    andThen(
      async (content) => {
        return match(isEmptyString(content))
          .with(true, () => [])
          .otherwise(async () => {
            return pipe(
              trim(content),
              split('\n'),
              map(split(',')),
              // map(async (lines) => fromCSV(lines).catch(err => err)), // err can be catched without leaving the pipeline
              map(fromCSV),
              async (entity: Array<Promise<T>>) => Promise.all(entity)
            )
          })
      }),
    otherwise(() => [])
  )
}
