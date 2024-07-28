import { describe, test, expect } from 'vitest'
import { FetchService } from './fetch.service.js'
import { FileEffect } from '../effects/fs.effect.js'

class TestFetchService extends FetchService<string[]> {
  async fromCSV(values: string[]): Promise<string[]> {
    return values
  }
}

describe('FetchService', () => {
  describe('fetchAll', () => {
    test('it should fetch all entities', async () => {
      // arrange
      const path = 'some-path'

      // mock
      const fileEffect: FileEffect = {
        async readFile(path) {return `alice,1991-01-01,femele
bob,1992-01-01,male
colin,1989-01-01,male
`}
      }

      // act
      const res = await new TestFetchService(fileEffect).fetchAll(path)

      // assert
      expect(res).toMatchInlineSnapshot(`
        [
          [
            "alice",
            "1991-01-01",
            "femele",
          ],
          [
            "bob",
            "1992-01-01",
            "male",
          ],
          [
            "colin",
            "1989-01-01",
            "male",
          ],
        ]
      `)
    })
  })
})
