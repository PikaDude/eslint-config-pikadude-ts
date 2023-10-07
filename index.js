module.exports = {
    env: {
        es2022: true,
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
                ecmaVersion: 2022,
                project: './tsconfig.json',
                sourceType: 'module',
            },
            rules: {
                'import/first': 'warn',
                'import/newline-after-import': 'warn',
                'import/no-duplicates': 'warn',
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
                'typescript-sort-keys/interface': ['warn', 'asc', { requiredFirst: true }],
                'typescript-sort-keys/string-enum': 'warn',
                curly: ['warn', 'multi-line'],
                'sort-keys': 'warn',
                '@typescript-eslint/explicit-module-boundary-types': 'warn',
                'require-await': 'off',
                '@typescript-eslint/require-await': 'warn',
            },
        },
    ],
    plugins: ['prettier', '@typescript-eslint', 'unused-imports', 'simple-import-sort', 'import', 'typescript-sort-keys'],
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
