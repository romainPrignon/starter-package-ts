import fs from 'node:fs'
import { Err } from '@romainprignon/std/oop/errors/index.js'

export class FileEffect {
  async readFile(path: string): Promise<string> {
    return fs.promises
      .readFile(path, { encoding: 'utf-8' })
      .catch(err => {throw new Err(`fail to read file ${path}`, { code: 'ERR_READFILE', cause: err })})
  }
}
