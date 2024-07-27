import { Person } from '../entities/person.entity.js'
import { isAfter } from 'date-fns'

export class PersonDomain {
  isBornAfter90s(p: Person): boolean {
    return isAfter(p.birth, '1990-01-01')
  }

  doLikeManga (p: Person): boolean {
    return p.likeManga
  }

  isBornAfter90sAndDoLikeManga (p: Person): boolean {
    return this.isBornAfter90s(p) && this.doLikeManga(p)
  }
}
