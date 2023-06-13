module.exports = {
  root: true,
  extends: 'airbnb',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      classes: true,
      modules: true,
    },
    requireConfigFile: false,
  },
  env: {
    es6: true,
    browser: true,
    mocha: true,
    jest: true,
  },
  globals: {
    __PRODUCTION__: true,
    document: true,
    window: true,
  },
  settings: {
    'import/resolver': {
      webpack: true,
    },
  },
  rules: {
    'default-case': 0,
    'default-param-last': 0,
    'class-methods-use-this': 0,
    'react/function-component-definition': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-no-constructed-context-values': 1,
    'react/no-array-index-key': 0,
    'react/no-unstable-nested-components': [
      2,
      {
        allowAsProps: true,
      },
    ],
    'arrow-body-style': 0,
    camelcase: [
      0,
      {
        properties: 'never',
      },
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'consistent-return': 0,
    'prefer-template': 0,
    'max-len': [
      0,
      200,
      4,
    ],
    'modules-newlines/import-declaration-newline': 2,
    'no-constant-condition': 0,
    'no-continue': 0,
    'no-mixed-spaces-and-tabs': [
      2,
      'smart-tabs',
    ],
    'no-restricted-syntax': [
      0,
      'FunctionExpression',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'no-return-assign': 0,
    'no-shadow': [
      0,
      {
        hoist: 'all',
      },
    ],
    'no-tabs': 2,
    'no-use-before-define': [
      2,
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ],
    'no-undef': 2,
    'no-underscore-dangle': [
      0,
      {
        allow: [],
      },
    ],
    'no-unused-expressions': 0,
    'import/first': 2,
    'import/no-cycle': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin', // Built-in Node modules.
          'external', // Anything from package.json.
          'internal', // E.g., `import Paragraph from '~mds/blocks/Paragraph'`.
          'unknown', // Internal aliased "modules"
          'index',
          'sibling',
          'parent',
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroupsExcludedImportTypes: [],
      },
    ],
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'no-proto': 0,
    'no-func-assign': 0,
    'one-var': [
      0,
      'never',
    ],
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: false,
      },
    ],
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'never',
        children: true,
      },
    ],
    'react/jsx-fragments': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: [
          '.js',
        ],
      },
    ],
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'react/jsx-pascal-case': [
      2,
      {
        ignore: [
          'component',
          'storiesOf',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/no-danger': 0,
    'react/no-did-update-set-state': 2,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/state-in-constructor': 0,
    'react/style-prop-object': [
      2,
      {
        allow: [
          'FormattedNumber',
        ],
      },
    ],
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'single',
          'multiple',
        ],
      },
    ],
    strict: [
      0,
      'global',
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        aspects: [
          'invalidHref',
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: [
          'Input',
        ],
        depth: 3,
      },
    ],
  },
  plugins: [
    'react',
    'react-hooks',
    'babel',
    'jsx-a11y',
    'sort-imports-es6-autofix',
    'modules-newlines',
  ],
};
