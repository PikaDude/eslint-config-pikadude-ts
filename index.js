module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    plugins: ['prettier', '@typescript-eslint', 'unused-imports', 'simple-import-sort', 'import'],
    overrides: [
        {
            files: ['*.json'],
            extends: ['plugin:json/recommended'],
            plugins: ['json'],
            rules: {
                'json/*': ['error', 'allowComments'],
                'prettier/prettier': ['warn', { parser: 'json' }],
            },
        },
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                project: './tsconfig.json',
            },
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
            rules: {
                'no-async-promise-executor': 0,
                'prefer-const': [
                    'warn',
                    {
                        destructuring: 'any',
                        ignoreReadBeforeAssign: false,
                    },
                ],
                'simple-import-sort/imports': 'warn',
                'simple-import-sort/exports': 'warn',
                'import/first': 'error',
                'import/newline-after-import': 'error',
                'import/no-duplicates': 'error'
            },
        },
    ],
    rules: {
        'linebreak-style': ['warn', 'unix'],
        'prettier/prettier': [
            'warn',
            {
                semi: true,
                arrowParens: 'always',
                singleQuote: true,
                tabWidth: 4,
                printWidth: 150,
            },
        ],
    },
};
