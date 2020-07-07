module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
};
