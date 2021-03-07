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
                    'error',
                    {
                        destructuring: 'any',
                        ignoreReadBeforeAssign: false,
                    },
                ],
            },
        },
    ],
    rules: {
        'linebreak-style': ['warn', 'unix'],
        'prettier/prettier': [
            'error',
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
