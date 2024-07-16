import { Birth, birthSchema } from '../dataclasses/birth.dataclass.js'

export const parseBirth = async (birthLike: unknown): Promise<Birth> => birthSchema.parseAsync(birthLike)
