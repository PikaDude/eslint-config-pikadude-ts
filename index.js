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
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'plugin:prettier/recommended'],
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2022,
                project: './tsconfig.json',
                sourceType: 'module',
            },
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'warn',
                curly: ['warn', 'multi-line'],
                'import/first': 'warn',
                'import/newline-after-import': 'warn',
                'import/no-duplicates': 'warn',
                'prefer-const': [
                    'warn',
                    {
                        destructuring: 'any',
                        ignoreReadBeforeAssign: false,
                    },
                ],
                'prettier/prettier': 'warn',
                'simple-import-sort/exports': 'warn',
                'simple-import-sort/imports': 'warn',
                'sort-keys-fix/sort-keys-fix': 'warn',
                'typescript-sort-keys/interface': ['warn', 'asc', { requiredFirst: true }],
                'typescript-sort-keys/string-enum': 'warn',
            },
        },
    ],
    plugins: [
        'only-warn',
        '@typescript-eslint',
        'prettier',
        'import',
        'simple-import-sort', // sort imports
        'typescript-sort-keys', // sort interface and enum keys
        'sort-keys-fix', // sort object keys
    ],
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
