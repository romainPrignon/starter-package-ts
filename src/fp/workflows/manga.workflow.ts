/**
 * Find all persons born after 90s that like manga in the file
 * Send them an email
 * Store email sending status
 * Return  number of email sent in success and error
 */

import { pipe } from 'remeda'
import { andThen, tap } from 'ramda'
import { Person } from '../entities/person.entity.js'
import { filterPersonBy } from '../domains/person.domain.js'
import { fetchAllPerson } from '../services/person.service.js'
import { isAfter } from 'date-fns'

const isBornAfter90s = (p: Person) => isAfter(p.birth, '1990-01-01')
const doLikeManga = (p: Person) => p.likeManga
const predicat = (p: Person): boolean => isBornAfter90s(p) && doLikeManga(p)

const filterByPersonBornAfter90sThatLikeManga = filterPersonBy(predicat)

export const mangaWorkflow = async (path: string): Promise<Array<Person>> => {
  return pipe(
    fetchAllPerson(path),
    // otherwise(() => []), // silent errors, but might also gather into an array of errors; TODO: grap for later
    andThen(filterByPersonBornAfter90sThatLikeManga),
    andThen(tap(console.log))
  )
}

// mangaWorkflow('./person.fixture.csv')
// .catch((err) => console.error('error', err))
