import { isEmptyString } from '@sindresorhus/is'
import { readFile } from '../effects/fs.effect.js'
import { pipe } from 'remeda'
import { map, split, trim, andThen, otherwise } from 'ramda'
import { match } from 'ts-pattern'

export type FromCSV<T> = (values: Array<string>) => T

export const fetchAll = <T>(fromCSV: FromCSV<T>) => async (path: string): Promise<Array<T>> => {
  return pipe(
    readFile(path),
    andThen(
      (content) => {
        return match(isEmptyString(content))
          .with(true, () => [])
          .otherwise(() => pipe(
            trim(content),
            split('\n'),
            map(split(',')),
            map(fromCSV)
          ))
      }),
    otherwise(() => [])
  )
}
