module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__mocks__/fileMock.js',
    "@test-utils": "<rootDir>/modules/test-utils.tsx",
    "@design-system": "<rootDir>/modules/design-system",
    "@elements/(.*)$": "<rootDir>/modules/elements/$1",
    "@elements": "<rootDir>/modules/elements/index",
    "@api/(.*)$": "<rootDir>/modules/api/$1",
    "@api": "<rootDir>/modules/api/index",
    "@constants/(.*)$": "<rootDir>/modules/constants/$1",
    "@hooks/(.*)$": "<rootDir>/modules/hooks/$1",
    "@hooks": "<rootDir>/modules/hooks",
    "@redux/(.*)$": "<rootDir>/modules/redux/$1",
    "@typescript/(.*)$": "<rootDir>/modules/typescript/$1",
    "@utils/(.*)$": "<rootDir>/modules/utils/$1",
    "@components/(.*)$": "<rootDir>/components/$1",
    "@components": "<rootDir>/components/index",
    "@views/(.*)$": "<rootDir>/views/$1"
  },
  setupFiles: ['jest-localstorage-mock', '<rootDir>/.jest/set-env.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'modules']
};
