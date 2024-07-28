import { Person } from '../entities/person.entity.js'
import { filterPersonBy } from '../domains/person.domain.js'
import { fetchAllPerson } from '../services/person.service.js'
import { isAfter } from 'date-fns'
import * as emailService from '../services/email.service.js'
import { isBoolean } from '@sindresorhus/is'
import { Err } from '@romainprignon/std/_internal/error/Error.js'
import { filter, map, tap } from 'ix/asynciterable/operators/index'
import { from } from 'ix/asynciterable/index'

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
  const x = await fetchAllPerson(path)
  const emailStatus = from(x).pipe(
    // fetchAllPerson(path),
    // otherwise(() => []), // silent errors, but might also gather into an array of errors; TODO: grap for later
    filter(predicat),
    map(async (person: Person) => emailService.send({ to: person.name, content: 'marketing content' })),
    tap(console.log),
  )

  let acc = { success: 0, failure: 0 }
  for await (const s of emailStatus) {
    acc = countEmailStatus(acc, s)
  }
  console.log(acc)
  return acc
}

// mangaWorkflow('./fixtures/person.fixture.csv')
// .catch((err) => console.error('error', err))
