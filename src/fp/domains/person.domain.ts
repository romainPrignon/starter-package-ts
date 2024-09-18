import { filter } from 'ramda'
import { Person } from '../entities/person.entity.js'

type PersonPredicat = (person: Person) => boolean

export const filterPersonBy = (predicat: PersonPredicat) => (persons: Array<Person>): Array<Person> => {
  // return filter(predicat, persons)
  return persons.filter(predicat)
}
