import {  andThen, map, tap, reduce } from 'ramda'
import { Person } from '../entities/person.entity.js'
import { filterPersonBy } from '../domains/person.domain.js'
import { fetchAllPerson } from '../services/person.service.js'
import { isAfter } from 'date-fns'
import * as emailService from '../services/email.service.js'
import { isBoolean } from '@sindresorhus/is'
import { Err } from '@romainprignon/std/_internal/error/Error.js'
import { chain } from 'radash'
import { pipe } from 'rambda'
import { mapRes } from '../../err.js'

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
  return chain(
    () => fetchAllPerson(path),
    andThen(([err, res]) => {
      return [err, err || filterByPersonBornAfter90sThatLikeManga(res!)]
    }),
    // andThen(([err, res]) => {
      // return err ? [err, null] : [null, filterByPersonBornAfter90sThatLikeManga(res!)]
    // }),
    // andThen(mapRes(filterByPersonBornAfter90sThatLikeManga))
    // andThen(map(async (person: Person) => emailService.send({ to: person.name, content: 'marketing content' }))),
    // andThen(async (promises) => Promise.all(promises)),
    // andThen(tap(console.log)),
    // andThen(reduce((acc, eitherPerson) => countEmailStatus(acc, eitherPerson), { success: 0, failure: 0 }))
  )()
  // (fetchAllPerson(path))
}

mangaWorkflow('./fixtures/person.fixture.csv')
.then((data) => console.log('data', data))
.catch((err) => console.error('error', err))
