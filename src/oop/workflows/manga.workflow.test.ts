import { describe, test, expect } from 'vitest'
import { MangaWorkflow } from './manga.workflow.js'
import { PersonDomain } from '../domains/person.domain.js'
import { EmailService } from '../services/email.service.js'
import { fromPartial } from '@total-typescript/shoehorn'
import { FetchPersonService } from '../services/person.service.js'
import PersonEntity, { Person } from '../entities/person.entity.js'

describe('MangaWorkflow', () => {
  describe('run', () => {
    test('it should run the manga workflow with empty content', async () => {
      // arrange
      const path = 'some-path'
      const persons: Array<Person> = []

      // mock
      const fetchPersonService: FetchPersonService = fromPartial({
        fetchAll: async () => persons,
      })
      const personDomain = new PersonDomain()
      const emailService: EmailService = fromPartial({
        send: async () => true
      })

      // act
      const res = await new MangaWorkflow(fetchPersonService, personDomain, emailService).run(path)

      // assert
      expect(res).toEqual({ success: 0, failure: 0 })
    })

    test('it should run the manga workflow with empty content', async () => {
      // arrange
      const path = 'some-path'
      const person: Person = {
        name: 'a',
        birth: new Date(),
        gender: 'male',
        likeManga: true
      }
      const persons = [PersonEntity.from(person)]

      // mock
      const fetchPersonService: FetchPersonService = fromPartial({
        fetchAll: async () => persons,
      })
      const personDomain = new PersonDomain()
      const emailService: EmailService = fromPartial({
        send: async () => true
      })

      // act
      const res = await new MangaWorkflow(fetchPersonService, personDomain, emailService).run(path)

      // assert
      expect(res).toEqual({ success: 0, failure: 0 }) // FIX: should be { success: 1, failure: 0 }
    })
  })
})
