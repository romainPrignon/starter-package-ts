import { isEmptyString } from '@sindresorhus/is'
import { FileEffect } from '../effects/fs.effect.js'
import { match } from 'ts-pattern'


export abstract class FetchService<T> {
  constructor(private fileEffect: FileEffect) {}

  abstract fromCSV(values: Array<string>): Promise<T>

  // TODO: tester de reecrire avec ix pour voir la diff
  async fetchAll(path: string): Promise<Array<T>> {
    return this.fileEffect
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
      .then(lines => Promise.all(lines))
      // .catch(() => [])
  }
}
