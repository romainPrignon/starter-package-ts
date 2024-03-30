import { Exception } from '../../../types/exception.js'

const raise = (err: Error): Exception => {
  throw err
}

export { raise }
