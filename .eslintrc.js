const config = {
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': ['off'],
                '@typescript-eslint/no-unsafe-call': ['off'],
                '@typescript-eslint/no-unsafe-member-access': ['off'],
                '@typescript-eslint/no-unsafe-return': ['off'],
                '@typescript-eslint/no-var-requires': ['off'],
                '@typescript-eslint/restrict-template-expressions': ['off'],
                'react/prop-types': ['off'],
                /**
                 * This magic grouping moves `import type` statements as their own group.
                 * @see https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
                 */
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'],
                            ['^\\u0000'],
                            ['^@?\\w'],
                            ['^'],
                            ['^\\.'],
                        ],
                    },
                ],
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import', 'prettier', 'simple-import-sort', 'react', 'react-hooks', 'react-native'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: { pragma: 'React', version: 'detect' },
    },
    rules: {
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        '@typescript-eslint/no-extra-semi': ['off'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/no-use-before-define': ['error'],
        'eol-last': ['error', 'always'],
        eqeqeq: ['error', 'smart'],
        'import/extensions': [
            'error',
            'never',
            {
                json: 'always',
            },
        ],
        'import/first': ['error'],
        'import/named': ['error'],
        'import/namespace': ['error'],
        'import/newline-after-import': ['error'],
        'import/no-duplicates': ['error'],
        'import/no-unresolved': ['error'],
        'linebreak-style': ['error', 'unix'],
        'max-depth': ['warn', 3],
        'no-else-return': ['error', { allowElseIf: false }],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-eq-null': ['warn'],
        'no-irregular-whitespace': ['error', { skipTemplates: true }],
        'nonblock-statement-body-position': ['error'],
        'prefer-arrow-callback': ['warn'],
        'simple-import-sort/exports': ['error'],
        'simple-import-sort/imports': ['error'],
        'react-hooks/rules-of-hooks': ['error'],
        'react-hooks/exhaustive-deps': ['error'],
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
        'react/jsx-no-bind': ['error'],
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
        'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
        'react/jsx-sort-default-props': ['error'],
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandLast: true,
                reservedFirst: true,
                ignoreCase: true,
            },
        ],
        'react/no-unused-state': ['error'],
        'react/prefer-stateless-function': ['warn'],
        'react/style-prop-object': ['error'],
    },
}

module.exports = config
