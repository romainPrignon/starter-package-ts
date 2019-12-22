import { Immutable, Mutable } from '../../type/utils/immutable'

export const imut = <T>(x: T): Immutable<T> => x

export const mut = <T>(x: T): Mutable<T> => x
