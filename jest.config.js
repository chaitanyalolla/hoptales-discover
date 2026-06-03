export default {
  testEnvironment: 'jsdom',
  passWithNoTests: true,
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
