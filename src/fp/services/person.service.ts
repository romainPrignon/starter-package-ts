import { andThen, otherwise, pipe } from 'ramda'
import { Person, personSchema, person } from '../entities/person.entity.js'
import { fetchAll } from './fetch.service.js'

export const parsePerson = async (personLike: unknown): Promise<Person> => personSchema.parseAsync(personLike)

export const fromCSV = async ([name, likeManga, birthDate, genderString]: Array<string>): Promise<Person> => {
  const parsedPerson = pipe(parsePerson, andThen(person), otherwise((err) => err))

  return parsedPerson({
    name,
    likeManga: likeManga === 'true',
    birth: new Date(birthDate),
    gender: genderString
  })
}

// if you want to handle error types  properly
// export const fromCSV = async ([name, likeManga, birthDate, genderString]: Array<string>): Promise<Person| Error> => {
//   const parsedPerson = pipe(parsePerson, andThen(person), otherwise((err: Error) => err))

//   return parsedPerson({
//     name,
//     likeManga: likeManga === 'true',
//     birth: new Date(birthDate),
//     gender: genderString
//   })
// }

export const fetchAllPerson = fetchAll(fromCSV)
