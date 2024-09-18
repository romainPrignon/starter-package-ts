import { Err, inherit } from '@romainprignon/std/fp/errors/index.js'

export const InvariantError = inherit(Err, 'InvariantError')
