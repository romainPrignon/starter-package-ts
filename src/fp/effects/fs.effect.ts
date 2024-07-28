import fs from 'node:fs'
import { createEffect } from 'effector'
import { Err } from '@romainprignon/std/fp/errors/index.js'
import { mayAsync, raise } from '@romainprignon/std/fp/functions/index.js'

export const readFile = createEffect(async (path: string): Promise<string> => {
  return mayAsync(
    async () => fs.promises.readFile(path, { encoding: 'utf-8' }),
    (err) => raise(Err(`fail to read file ${path}`, { code: 'ERR_READFILE', cause: err }))
  )
})
