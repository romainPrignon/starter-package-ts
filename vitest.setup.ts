import {  beforeAll } from 'vitest'

beforeAll(async () => {
  process.env = {
    APP_ENV: 'test'
  }
})
