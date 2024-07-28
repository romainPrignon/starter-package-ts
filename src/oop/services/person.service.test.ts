import { describe, test, vi, expect } from 'vitest'
import { FetchPersonService } from './person.service.js'
import { FileEffect } from '../effects/fs.effect.js'

describe('FetchPersonService', () => {
  describe('fromCSV', () => {
    test('it should parse and create a Person entity from CSV', async () => {
      // arrange
      const csvData = ['John Doe', 'true', '1990-01-01', 'male']

      // mock
      const fileEffect: FileEffect = {
        async readFile(path) {return path}
      }

      // act
      const result = await new FetchPersonService(fileEffect).fromCSV(csvData)

      // assert
      expect(result).toEqual({
        name: 'John Doe',
        likeManga: true,
        birth: new Date('1990-01-01'),
        gender: 'male'
      })
    })

    test('it should fail to parse and create a Person entity from CSV', async () => {
      // arrange
      const csvData = ['John Doe', 'true', '1990-01-01', 'Male']

      // mock
      const fileEffect: FileEffect = {
        async readFile(path) {return path}
      }

      // act
      const result = await new FetchPersonService(fileEffect).fromCSV(csvData).catch(err => err)

      // assert
      expect(result).toMatchInlineSnapshot(`
        [ZodError: [
          {
            "received": "Male",
            "code": "invalid_enum_value",
            "options": [
              "male",
              "femele"
            ],
            "path": [
              "gender"
            ],
            "message": "Invalid enum value. Expected 'male' | 'femele', received 'Male'"
          }
        ]]
      `)
    })
  })
})
