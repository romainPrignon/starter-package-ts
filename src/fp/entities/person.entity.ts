import { gendersSchema } from '../constants/gender.constant.js'
import { birth, birthSchema } from '../dataclasses/birth.dataclass.js'
import { ReadonlyDeep } from 'type-fest'
import * as z from 'zod'
import { mayAsync, raise } from '@romainprignon/std/fp/functions'

export const personSchema = z.object({
  name: z.string(),
  likeManga: z.boolean(),
  gender: gendersSchema,
  birth: birthSchema
})
export type Person = z.infer<typeof personSchema>

export const person = async (data: Person): Promise<ReadonlyDeep<Person>> => {
  return {
    ...data,
    // just to illustrate that it's easy to rethrow/return error
    birth: await mayAsync(async () => birth(data.birth), (err) => raise(err as Error))
  }
}
