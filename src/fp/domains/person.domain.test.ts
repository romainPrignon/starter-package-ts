import { describe, test, expect } from 'vitest'
import { Person } from '../entities/person.entity.js'
import { fromPartial } from '@total-typescript/shoehorn'
import { filterPersonBy, fromCSV } from './person.domain.js'

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
    test('it should parse a csv line to a person', () => {
      // arrange
      const line: Array<string> = ['alice', 'true', '1991-01-01', 'femele']

      // act
      const res = fromCSV(line)

      // assert
      expect(res).toEqual({
        birth: new Date('1991-01-01T00:00:00.000Z'),
        gender: 'femele',
        likeManga: true,
        name: 'alice'
      })
    })

    test('it should parse a csv line to a person that do not like manga', () => {
      // arrange
      const line: Array<string> = ['alice', 'false', '1991-01-01', 'femele']

      // act
      const res = fromCSV(line)

      // assert
      expect(res).toEqual({
        birth: new Date('1991-01-01T00:00:00.000Z'),
        gender: 'femele',
        likeManga: false,
        name: 'alice'
      })
    })

    test('it should return an error parsing a csv line with invalid birth', () => {
      // arrange
      const line: Array<string> = ['alice', 'true', '', 'femele']

      // act
      const res = fromCSV(line)

      // assert
      expect(res).toMatchInlineSnapshot('[Error: invalid birthdate Invalid Date]')
    })

    test('it should return an error parsing a csv line with invalid gender', () => {
      // arrange
      const line: Array<string> = ['alice', 'true', '1991-01-01', 'foo']

      // act
      const res = fromCSV(line)

      // assert
      expect(res).toMatchInlineSnapshot('[Error: gender not valid foo]')
    })
  })
})
