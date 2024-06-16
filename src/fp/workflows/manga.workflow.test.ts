import { describe, test, expect } from 'vitest'
import { mangaWorkflow } from './manga.workflow.js'
import { readFile } from '../effects/fs.effect.js'

describe('manga workflow', () => {
  describe('mangaWorkflow', () => {
    test.concurrent('it should run the manga workflow with empty content', () => {
      // arrange
      const path = 'some-path'
      const content = ''
      readFile.use(async () => content)

      // act
      mangaWorkflow(path)
        .then((res) =>
          // assert
          expect(res).toEqual([])
        )
        .catch(err => { throw err })
    })

    test.concurrent('it should run the manga workflow with fake content', async () => {
      // arrange
      const path = 'some-path'
      const content = 'fake-content'
      readFile.use(async () => content)

      // act
      mangaWorkflow(path)
        .then((res) =>
          // assert
          expect(res).toEqual([])
        )
        .catch(err => { throw err })
    })

    test.concurrent('it should run the manga workflow with right content', async ({ expect }) => {
      // arrange
      const path = 'some-path'
      const person1 = 'alice,true,1991-01-01,femele'
      const person2 = 'bob,true,1992-01-01,male'
      const person3 = 'colin,false,1989-01-01,male'
      const content = `${person1}
${person2}
${person3}
`
      readFile.use(async () => content)

      // act
      mangaWorkflow(path)
        .then((res) =>
          // assert
          expect(res).toMatchInlineSnapshot(`
            [
              {
                "birth": 1991-01-01T00:00:00.000Z,
                "gender": "femele",
                "likeManga": true,
                "name": "alice",
              },
              {
                "birth": 1992-01-01T00:00:00.000Z,
                "gender": "male",
                "likeManga": true,
                "name": "bob",
              },
            ]
          `)
        )
        .catch(err => { throw err })
    })
  })
})
