import fs from 'fs'
import { createEffect } from 'effector'
import { Error } from '@romainprignon/utils/fp/errors/Error.js' // TODO rename to Err
import { raise } from '../utils/raise.util.js'

export const readFile = createEffect(async (path: string): Promise<string> => {
  try {
    return fs.promises.readFile(path, { encoding: 'utf-8' })
  } catch (err) {
    return raise(Error(`fail to read file ${path}`, { code: 'ERR_READFILE', cause: err })) // todo: rename to Err)
  }

  // return pipe(
//
  // otherwise((err: Error) => {
  // or throw works as well
//
  // })
  // )
})
