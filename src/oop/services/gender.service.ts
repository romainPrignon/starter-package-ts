import { Genders, gendersSchema } from '../constants/gender.constant.js'

export class GenderService {
  async parse(genderLike: string): Promise<Genders> {
    return gendersSchema.parseAsync(genderLike)
  }
}
