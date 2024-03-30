import { Genders } from '../constants/gender.constant.js'
import { Birth } from '../dataclasses/birth.dataclass.js'
import { entity } from './entity.js'
import { ReadonlyDeep } from 'type-fest'

export type Person = ReadonlyDeep<{
  name: string
  likeManga: boolean
  gender: Genders
  birth: Birth
}>

export const person = entity<Person>
