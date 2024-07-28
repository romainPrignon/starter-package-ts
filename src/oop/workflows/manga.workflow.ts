import { isBoolean } from '@sindresorhus/is'
import { Err } from '@romainprignon/std/_internal/error/Error.js'
import { AsyncIterableX as AsyncIterable } from 'ix/asynciterable';
import 'ix/add/asynciterable-operators/filter';
import 'ix/add/asynciterable-operators/map';
import 'ix/add/asynciterable-operators/reduce';

import { PersonDomain } from '../domains/person.domain.js'
import { FetchPersonService } from '../services/person.service.js'
import { EmailService } from '../services/email.service.js'

/**
 * Find all persons born after 90s that like manga in the file
 * Send them an email
 * Store email sending status
 * Return  number of email sent in success and error
 */
export class MangaWorkflow {
  constructor(private fetchPersonService: FetchPersonService, private personDomain: PersonDomain, private emailService: EmailService) {}

  async run(path: string) {
    return AsyncIterable.from(this.fetchPersonService.fetchAll(path))
      .filter(p => this.personDomain.isBornAfter90sAndDoLikeManga(p))
      .map(p => this.emailService.send({ to: p.name, content: 'marketing content' }))
      .reduce({
        callback: (acc = {success: 0, failure: 0}, email) => this.countEmailStatus(acc, email),
        seed:{success: 0, failure: 0}
      })
  }

  private countEmailStatus = (acc: any, email: boolean | Err) => {
    return isBoolean(email) ? { ...acc, success: acc.success + 1 } : { ...acc, failure: acc.failure + 1 }
  }
}
