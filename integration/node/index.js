import { mangaWorkflow } from 'starter-package-ts'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

mangaWorkflow(__dirname + '/../../person.fixture.csv')
