module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    overrides: [
        {
            extends: ['plugin:json/recommended'],
            files: ['*.json'],
            plugins: ['json'],
            rules: {
                'json/*': ['error', 'allowComments'],
                'prettier/prettier': ['warn', { parser: 'json' }],
            },
        },
        {
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                project: './tsconfig.json',
                sourceType: 'module',
            },
            rules: {
                'import/first': 'error',
                'import/newline-after-import': 'error',
                'import/no-duplicates': 'error',
                'no-async-promise-executor': 0,
                'prefer-const': [
                    'warn',
                    {
                        destructuring: 'any',
                        ignoreReadBeforeAssign: false,
                    },
                ],
                'simple-import-sort/exports': 'warn',
                'simple-import-sort/imports': 'warn',
                'sort-keys-fix/sort-keys-fix': 'warn',
                'typescript-sort-keys/interface': 'warn',
                'typescript-sort-keys/string-enum': 'warn',
            },
        },
    ],
    plugins: ['prettier', '@typescript-eslint', 'unused-imports', 'simple-import-sort', 'import', 'sort-keys-fix', 'typescript-sort-keys'],
    rules: {
        'linebreak-style': ['warn', 'unix'],
        'prettier/prettier': [
            'warn',
            {
                arrowParens: 'always',
                printWidth: 150,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
            },
        ],
    },
};
