import { Genders } from '../constants/gender.constant.js'
import PersonEntity, { Person, personSchema } from '../entities/person.entity.js'
import { FetchService } from './fetch.service.js'

export class FetchPersonService extends FetchService<Person> {

  private async parse(personLike: Person & unknown): Promise<Person> {
    return personSchema.parseAsync(personLike)
  }

  async fromCSV([name, likeManga, birth, gender]: Array<string>): Promise<Person> {
    // TODO: on voit bien que normaement ca marche pas et que le from doit faire depuis un unkknow
    // ou alors, on veut plutot un service person csv avec un toentity
    return this.parse({
      name,
      birth: new Date(birth),
      gender: gender as Genders,
      likeManga: likeManga === 'true'
    })
      .then(personLike => PersonEntity.from(personLike))

    // if you want to handle error types  properly
    // return this.parse(line).then(personLike => PersonEntity.from(personLike)).catch(err => err)

    // return PersonEntity.from({
    //   name,
    //   likeManga: likeManga === 'true',
    //   birth: new Date(birthDate),
    //   gender: genderString
    // })
  }
}
