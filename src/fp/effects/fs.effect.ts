import fs from 'node:fs'
// import { Err } from '@romainprignon/std/fp/errors/index.js'
import { Either, Res, Err } from '../../err.js'


export const readFile = async (path: string): Promise<Either<string>> => {
  return fs.promises.readFile(path, { encoding: 'utf-8' })
    .then(content => {
      if (Math.random() < 0.9) {
          return Err(new Error('boom'))
      }
      return Res(content)
    })
    // .catch(err => Err(err))
}
