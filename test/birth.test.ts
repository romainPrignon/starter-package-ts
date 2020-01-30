// type
import { Moment } from 'moment'

// test
import * as birth from '../src/birth'

// mock
jest.mock('moment')
const moment = require('moment')

afterEach(() => {
  jest.restoreAllMocks()
})

describe('birth', () => {
  describe('getDurationSinceBirth', () => {

    it('should throw when called with non date arg', () => {
      // mock
      moment.mockImplementation(() => ({
        isValid: () => true,
        isBefore: () => false
      }))

      expect(
        () => birth.getDurationSinceBirth('some-string')
      )
        .toThrow('Expected value which is `truthy`, received value of type `boolean`.')
    })

    it('should throw when called with future date arg', () => {
      // mock
      moment.mockImplementation(() => ({
        isValid: () => true,
        isBefore: () => false
      }))

      expect(
        () => birth.getDurationSinceBirth('2021-03-23')
      ).toThrow('Expected value which is `truthy`, received value of type `boolean`.')
    })

    it('should return duration when called with date arg', () => {
      // mock
      moment.mockImplementation(() => ({
        isValid: () => true,
        isBefore: () => true,
        diff: (_: Moment, unitOfTime: string) => {
          if (unitOfTime === 'days') {
            return 365
          }
          if (unitOfTime === 'months') {
            return 12
          }
          if (unitOfTime === 'years') {
            return 1
          }

          return 1
        }
      }))

      expect(birth.getDurationSinceBirth('1989-03-23')).toEqual({
        days: 365,
        months: 12,
        years: 1
      })
    })
  })
})
