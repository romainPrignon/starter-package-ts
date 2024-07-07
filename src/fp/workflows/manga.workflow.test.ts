import { describe, test, expect } from 'vitest'
import { mangaWorkflow } from './manga.workflow.js'
import { readFile } from '../effects/fs.effect.js'
import { send } from '../effects/email.effect.js'
import { Err } from '@romainprignon/std/fp/errors'
import { raise } from '@romainprignon/std/fp/functions'

describe('manga workflow', () => {
  describe('mangaWorkflow', () => {
    test.concurrent('it should run the manga workflow with empty content', async () => {
      // arrange
      const path = 'some-path'
      const content = ''
      readFile.use(async () => content)

      // act
      return mangaWorkflow(path)
        .then((res) =>
          // assert
          expect(res).toEqual({ success: 0, failure: 0 })
        )
        .catch(err => { throw err })
    })

    test.concurrent('it should run the manga workflow with fake content', async () => {
      // arrange
      const path = 'some-path'
      const content = 'fake-content'
      readFile.use(async () => content)

      // act
      return mangaWorkflow(path)
        .then((res) =>
          // assert
          expect(res).toEqual({ success: 0, failure: 0 })
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
      send.use(async () => raise(Err('boom', { code: 'ERR_SEND_EMAIL' })))

      // act
      return mangaWorkflow(path)
        .then((res) =>
          // assert
          expect(res).toMatchInlineSnapshot(`
            {
              "failure": 2,
              "success": 0,
            }
          `)
        )
        .catch(err => { throw err })
    })
  })
})
