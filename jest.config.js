module.exports = {
  roots: ['lib'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/lib/**'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        diagnostics: {
          ignoreCodes: [151001]
        }
      }
    ]
  }
}
