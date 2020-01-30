import { Immutable } from '../type'

import moment from 'moment'
import { assert } from '@sindresorhus/is'


type GetDurationSinceBirth = (birthdate: string) => Immutable<{ days: number, months: number, years: number }>
const getDurationSinceBirth: GetDurationSinceBirth = (birthdate) => {
  const _birthdate = moment(birthdate)
  const now = moment()

  assert.truthy(_birthdate.isValid())
  assert.truthy(_birthdate.isBefore(now))

  return {
    days: now.diff(_birthdate, 'days'),
    months: now.diff(_birthdate, 'months'),
    years: now.diff(_birthdate, 'years')
  }
}

export {
  getDurationSinceBirth
}
