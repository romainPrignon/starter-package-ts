import * as awilix from 'awilix'
import { MangaWorkflow } from './workflows/manga.workflow.js'
import { PersonDomain } from './domains/person.domain.js'
import { FileEffect } from './effects/fs.effect.js'
import { FetchPersonService } from './services/person.service.js'
import { EmailService } from './services/email.service.js'
import { EmailEffect } from './effects/email.effect.js'

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC,
  strict: true
})

// inject all our dependencies
container.register({
  fileEffect: awilix.asClass(FileEffect),
  personDomain: awilix.asClass(PersonDomain),
  mangaWorkflow: awilix.asClass(MangaWorkflow),
  fetchPersonService: awilix.asClass(FetchPersonService),
  emailService: awilix.asClass(EmailService),
  emailEffect: awilix.asClass(EmailEffect)
})

const main = async () => {
  const mangaWorkflow = container.resolve<MangaWorkflow>('mangaWorkflow')

  return mangaWorkflow.run('./fixtures/person.fixture.csv')
}

main()
  .then(data => console.log(data))
  .catch(err => console.error(err))
