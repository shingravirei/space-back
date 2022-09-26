module.exports = {
    env: {
        node: true,
        es2021: true,
        jest: true,
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', 'testes/**/*'],
    },
    rules: {},
    ignorePatterns: [
        'node_modules',
        'dist',
        'migrations',
        'jest.config.js',
        '.eslintrc.js',
        'prettier.config.js',
        'tests',
    ],
};
