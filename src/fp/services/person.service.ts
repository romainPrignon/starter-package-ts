import { fromCSV } from '../domains/person.domain.js'
import { fetchAll } from './fetch.service.js'

export const fetchAllPerson = fetchAll(fromCSV)
