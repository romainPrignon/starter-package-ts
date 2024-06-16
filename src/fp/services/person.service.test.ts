import { describe, test, expect } from 'vitest'
import { readFile } from '../effects/fs.effect.js'
import { fetchAllPerson } from './person.service.js'

describe('person service', () => {
  describe('fetchAllPerson', () => {
    test('it should return a list of person', ({ expect }) => {
      // arrange
      const path = 'some-path'

      // mock
      readFile.use(async () => `alice,true,1991-01-01,femele
bob,true,1992-01-01,male
colin,false,1989-01-01,male
`)

      // act
      fetchAllPerson(path)
        .then(
        // assert
          res => expect(res).toMatchInlineSnapshot(`
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
              {
                "birth": 1989-01-01T00:00:00.000Z,
                "gender": "male",
                "likeManga": false,
                "name": "colin",
              },
            ]
          `)).catch(err => { throw err })
    })
    test('it should return an error with invalid gender', ({ expect }) => {
      // arrange
      const path = 'some-path'

      // mock
      readFile.use(async () => `alice,true,1991-01-01,femele
bob,true,1992-01-01,foo
colin,false,1989-01-01,male
`)

      // act
      fetchAllPerson(path)
        .then(
          // assert
          res => expect(res).toMatchInlineSnapshot(`
            [
              {
                "birth": 1991-01-01T00:00:00.000Z,
                "gender": "femele",
                "likeManga": true,
                "name": "alice",
              },
              [ZodError: [
              {
                "received": "foo",
                "code": "invalid_enum_value",
                "options": [
                  "male",
                  "femele"
                ],
                "path": [
                  "gender"
                ],
                "message": "Invalid enum value. Expected 'male' | 'femele', received 'foo'"
              }
            ]],
              {
                "birth": 1989-01-01T00:00:00.000Z,
                "gender": "male",
                "likeManga": false,
                "name": "colin",
              },
            ]
          `)).catch(err => { throw err })
    })
  })
})
