import { pipe, andThen, map, tap, reduce } from 'ramda'
import { Person } from '../entities/person.entity.js'
import { filterPersonBy } from '../domains/person.domain.js'
import { fetchAllPerson } from '../services/person.service.js'
import { isAfter } from 'date-fns'
// import { pipe } from '../utils/pipe.util.js'
import * as emailService from '../services/email.service.js'
import { isBoolean } from '@sindresorhus/is'
import { Err } from '@romainprignon/std/_internal/error/Error.js'

const isBornAfter90s = (p: Person) => isAfter(p.birth, '1990-01-01')
const doLikeManga = (p: Person) => p.likeManga
const predicat = (p: Person): boolean => isBornAfter90s(p) && doLikeManga(p)

const filterByPersonBornAfter90sThatLikeManga = filterPersonBy(predicat)

const countEmailStatus = (acc: any, eitherPerson: boolean | Err) => {
  return isBoolean(eitherPerson) ? { ...acc, success: acc.success + 1 } : { ...acc, failure: acc.failure + 1 }
}

/**
 * Find all persons born after 90s that like manga in the file
 * Send them an email
 * Store email sending status
 * Return  number of email sent in success and error
 */
export const mangaWorkflow = async (path: string): Promise<any> => {
  return pipe(
    // fetchAllPerson(path),
    // otherwise(() => []), // silent errors, but might also gather into an array of errors; TODO: grap for later
    andThen(filterByPersonBornAfter90sThatLikeManga),
    andThen(map((person: Person) => emailService.send({to: person.name, content: 'marketing content'}))),
    andThen((promises) => Promise.all(promises)),
    andThen(tap(console.log)),
    andThen(reduce((acc, eitherPerson: boolean | Err) => countEmailStatus(acc, eitherPerson), {success: 0, failure: 0}))
  )(fetchAllPerson(path))
}

// mangaWorkflow('./person.fixture.csv')
// .catch((err) => console.error('error', err))
