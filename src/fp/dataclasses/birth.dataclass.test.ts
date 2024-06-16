import { describe, test, expect } from 'vitest'
import { birth } from './birth.dataclass.js'

describe('birth dataclass', () => {
  describe('birth', () => {
    test('it should return a valid birthdate', async () => {
      // arrange
      const validDate = new Date('1970-01-01')

      // act
      const res = await birth(validDate)

      // assert
      expect(res).toEqual(validDate)
    })

    test('it should throw on invalid birthdate', () => {
      // arrange
      const invalidDate = new Date('')

      // assert
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      expect(async () => birth(invalidDate)).rejects.toMatchInlineSnapshot('[InvariantError: invalid birthdate Invalid Date]')
    })
  })
})
