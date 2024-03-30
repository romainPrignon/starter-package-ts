import { entity } from './entity.js'
import { Person } from './person.entity.js'
import { ReadonlyDeep } from 'type-fest'

export type LocatedPerson = ReadonlyDeep<Person & {
  postalCode?: string
}>

export const locatedPerson = entity<LocatedPerson>
