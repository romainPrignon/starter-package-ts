export type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>
}

export type Mutable<T> = { -readonly [K in keyof T]: Mutable<T[K]> }
