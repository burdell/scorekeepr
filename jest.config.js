module.exports = {
  roots: ['tests'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/lib/**'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  }
}
