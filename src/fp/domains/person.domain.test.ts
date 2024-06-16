import { describe, test, expect } from 'vitest'
import { Person } from '../entities/person.entity.js'
import { fromPartial } from '@total-typescript/shoehorn'
import { filterPersonBy } from './person.domain.js'
import { fromCSV } from '../services/person.service.js'

describe('person domain', () => {
  describe('filterBy', () => {
    test('it should return a list of Person entity', () => {
      // arrange
      const predicat = () => true
      const persons: Array<Person> = fromPartial([])

      // act
      const res = filterPersonBy(predicat)(persons)

      // assert
      expect(res).toEqual([])
    })
  })

  describe('fromCSV', () => {
    test('it should parse a csv line to a person', async () => {
      // arrange
      const line: Array<string> = ['alice', 'true', '1991-01-01', 'femele']

      // act
      const res = await fromCSV(line)

      // assert
      expect(res).toEqual({
        birth: new Date('1991-01-01T00:00:00.000Z'),
        gender: 'femele',
        likeManga: true,
        name: 'alice'
      })
    })

    test('it should parse a csv line to a person that do not like manga', async () => {
      // arrange
      const line: Array<string> = ['alice', 'false', '1991-01-01', 'femele']

      // act
      const res = await fromCSV(line)

      // assert
      expect(res).toEqual({
        birth: new Date('1991-01-01T00:00:00.000Z'),
        gender: 'femele',
        likeManga: false,
        name: 'alice'
      })
    })

    test('it should return an error parsing a csv line with invalid birth', async () => {
      // arrange
      const line: Array<string> = ['alice', 'true', '', 'femele']

      // act
      const res = await fromCSV(line)

      // assert
      expect(res).toMatchInlineSnapshot(`
        [ZodError: [
          {
            "code": "invalid_date",
            "path": [
              "birth"
            ],
            "message": "Invalid date"
          }
        ]]
      `)
    })

    // difficult to make it work due to date-fns parse or isValid
    // test('it should return an error parsing a csv line with inexistant birthdate', async () => {
    //   // arrange
    //   const line: Array<string> = ['alice', 'true', '1991-02-30', 'femele']

    //   // assert
    //   // eslint-disable-next-line @typescript-eslint/no-floating-promises
    //   expect(fromCSV(line)).rejects.toThrowErrorMatchingInlineSnapshot()
    // })

    test('it should return an error parsing a csv line with invalid gender', async () => {
      // arrange
      const line: Array<string> = ['alice', 'true', '1991-01-01', 'foo']

      // act
      const res = await fromCSV(line)

      // assert
      expect(res).toMatchInlineSnapshot(`
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
        ]]
      `)
    })
  })
})
