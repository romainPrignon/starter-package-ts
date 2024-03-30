import { filter } from 'ramda'
import { Person, person } from '../entities/person.entity.js'
import { birth } from '../dataclasses/birth.dataclass.js'
import { gender } from '../dataclasses/gender.dataclass.js'
import { Either } from '../../../types/either.js'

type PersonPredicat = (person: Person) => boolean

export const filterPersonBy = (predicat: PersonPredicat) => (persons: Array<Person>): Array<Person> => {
  return filter(predicat, persons)
}

// TODO: parse using zod or typebox
export const fromCSV = ([name, likeManga, birthDate, genderString]: Array<string>): Either<Error, Person> => {
  try {
    return person({
      name,
      likeManga: likeManga === 'true',
      birth: birth(new Date(birthDate)),
      gender: gender(genderString)
    })
  } catch (err) {
    return err as Error
  }
}
