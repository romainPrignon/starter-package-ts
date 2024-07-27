import { gendersSchema } from '../constants/gender.constant.js'
import { Birth, birthSchema } from '../dataclasses/birth.dataclass.js'
import { ReadonlyDeep } from 'type-fest'
import * as z from 'zod'
import { Entity } from './entity.js'

export const personSchema = z.object({
  name: z.string(),
  likeManga: z.boolean(),
  gender: gendersSchema,
  birth: birthSchema
})
export type PersonSchema = typeof personSchema
export type Person = z.infer<PersonSchema>

export default new class PersonEntity extends Entity<PersonSchema>{
  async from(e: Person): Promise<ReadonlyDeep<Person>> {
    return {
      ...await super.from(e),
      birth: await Birth.from(e.birth)
    }
  }
}


// const p = await Person.from({name: 'a', gender: 'femele', likeManga: true, birth: new Date()})

