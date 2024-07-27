import { describe, test, expect } from 'vitest'
import { Birth } from './birth.dataclass.js'

describe('birth dataclass', () => {
  describe('birth', () => {
    test('it should return a valid birthdate', async () => {
      // arrange
      const validDate = new Date('1970-01-01')

      // act
      Birth
        .from(validDate)
        .then((res) => {
          // assert
          expect(res).toEqual(validDate)
        })
    })

    test('it should throw on invalid birthdate', () => {
      // arrange
      const invalidDate = new Date('')

      // assert
      expect(Birth.from(invalidDate)).rejects.toMatchInlineSnapshot('[InvariantError: invalid birthdate Invalid Date]')
    })
  })
})
