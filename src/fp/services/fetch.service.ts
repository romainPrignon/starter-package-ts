import { isEmptyString } from '@sindresorhus/is'
import { readFile } from '../effects/fs.effect.js'
import { pipe, map, split, trim, andThen, otherwise } from 'ramda'
import { match, P } from 'ts-pattern'
import { Either, Res } from '../../err.js'

export type FromCSV<T> = (values: Array<string>) => Promise<T>

export const fetchAll = <T>(fromCSV: FromCSV<T>) => async (path: string): Promise<Either<Array<T>>> => {
  return readFile(path) as unknown as Either<T[]>
  // return pipe(
  //   andThen(
  //     async (content: Either<string>) => {
  //       return match(content)
  //         .with(([P.instanceOf(Error), null]), () => [])
  //         .with(([null, P.string]), ([err, c]) => {
  //       return match(isEmptyString(c))
  //         .with(true, () => Res([]))
  //         .otherwise(async () => {
  //           return pipe(
  //             trim,
  //             split('\n'),
  //             map(split(',')),
  //             // map(async (lines) => fromCSV(lines).catch(err => err)), // err can be catched without leaving the pipeline
  //             map(fromCSV),
  //             async (entity: Array<Promise<T>>) => Promise.all(entity),
  //             andThen(e => Res(e))
  //           )(c)
  //         })
  //     }).run()}),
  //   otherwise(() => Res([]))
  // )(readFile(path))
}
