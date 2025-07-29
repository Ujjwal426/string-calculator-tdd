/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',

  // ✅ Use ts-jest preset for ESM
  preset: 'ts-jest/presets/default-esm',

  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],

  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
