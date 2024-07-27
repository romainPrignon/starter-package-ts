import { PersonDomain } from '../domains/person.domain.js'
import { FetchPersonService } from '../services/person.service.js'

import { isBoolean } from '@sindresorhus/is'
import { Err } from '@romainprignon/std/_internal/error/Error.js'
import { EmailService } from '../services/email.service.js'

/**
 * Find all persons born after 90s that like manga in the file
 * Send them an email
 * Store email sending status
 * Return  number of email sent in success and error
 */
export class MangaWorkflow {
  constructor(private fetchPersonService: FetchPersonService, private personDomain: PersonDomain, private emailService: EmailService) {}

  // TODO: ix ?
  async run(path: string): Promise<number> {
    return this.fetchPersonService
      .fetchAll(path)
      .then(persons => persons.filter(p => this.personDomain.isBornAfter90sAndDoLikeManga(p)))
      .then(persons => persons.map(p => this.emailService.send({ to: p.name, content: 'marketing content' })))
      .then(emails => Promise.all(emails))
      .then(emails => emails.reduce(this.countEmailStatus, {success: 0, failure: 0}))
  }

  private countEmailStatus = (acc: any, email: boolean | Err) => {
    return isBoolean(email) ? { ...acc, success: acc.success + 1 } : { ...acc, failure: acc.failure + 1 }
  }
}
