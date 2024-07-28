import { describe, test, expect } from 'vitest'
import { Person } from '../entities/person.entity.js'
import { fromPartial } from '@total-typescript/shoehorn'
import { PersonDomain } from './person.domain.js'
import { Birth } from '../dataclasses/birth.dataclass.js'

describe('PersonDomain', () => {
  describe('isBornAfter90s', () => {
    test('it should return a boolean validating the predicate', async () => {
      // arrange
      const person: Person = fromPartial({birth: await Birth.from(new Date())})

      // act
      const res = new PersonDomain().isBornAfter90s(person)

      // assert
      expect(res).toEqual(true)
    })
  })

  describe('doLikeManga', () => {
    test('it should return a boolean validating the predicate', async () => {
      // arrange
      const person: Person = fromPartial({likeManga: true})

      // act
      const res = new PersonDomain().doLikeManga(person)

      // assert
      expect(res).toEqual(true)
    })
  })
})
