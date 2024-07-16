import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    sequence: {
      shuffle: true
    },
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 80,
        statements: 90,
      },
      exclude: [
        'fixtures/',
        'mocks/',
      ]
    },
    typecheck: {
      include: [
        '**\/{src,types}\/**\/*.test-d.ts'
      ],
    },
    setupFiles: [
      'vitest.setup.ts',
    ],
    include: [
      '**\/src\/**\/*.test.ts'
    ],
  },
})
