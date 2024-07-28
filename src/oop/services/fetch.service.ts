import { isEmptyString } from '@sindresorhus/is'
import { FileEffect } from '../effects/fs.effect.js'
import { match } from 'ts-pattern'

async function * combine (gen: any) {
  for await (const g of gen) {
    yield * g
  }
}

export abstract class FetchService<T> {
  constructor(private fileEffect: FileEffect) {}

  abstract fromCSV(values: Array<string>): Promise<T>

  async * fetchAll (path: string): AsyncGenerator<T> {
    yield * await this.fileEffect
      .readFile(path)
      .then(content =>
        match(isEmptyString(content))
        .with(true, () => [])
        .otherwise(() => content
          .trim()
          .split('\n')
        )
      )
      .then(lines =>
        lines
          .map(line => line
          .split(',')
        )
      )
      .then(lines => lines.map(line => this.fromCSV(line)))
      .then(lines => lines.map(function * (line) {yield line}))
      .then(gen => combine(gen))
      // .catch(() => [])
  }
}
