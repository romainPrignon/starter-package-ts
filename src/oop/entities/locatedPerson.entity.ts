import { Entity } from './entity.js'
import * as z from 'zod'
import { PersonSchema } from './person.entity.js'

export const locatedPersonSchema = z.object({
  postalCode: z.optional(z.string())
})
export type LocatedPersonSchema = typeof locatedPersonSchema

export default new class LocatedPersonEntity extends Entity<PersonSchema & LocatedPersonSchema> {}


// const l = new LocatedPerson().from({})
