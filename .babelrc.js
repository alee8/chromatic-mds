module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 1 version',
            '> 1%',
            'not dead',
          ],
          node: '18.16',
        },
        corejs: '3',
        useBuiltIns: 'entry',
      },
    ],
    ['@babel/preset-react'],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@loadable/babel-plugin',
    'react-docgen',
    ['react-intl'],
  ],
  env: {
    test: {
      plugins: [
        'transform-require-context',
      ],
    },
    production: {
      plugins: [
        [
          'transform-react-remove-prop-types',
          { removeImport: true },
        ],
      ],
    },
  },
};
