import { Err, inherit } from '@romainprignon/std/fp/errors'

export const InvariantError = inherit(Err, 'InvariantError')
