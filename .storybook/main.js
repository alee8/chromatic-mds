const aliases = require('../aliases');
const mdxCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const mode = isProd ? 'production' : 'development';
const nodeDebug = '';

module.exports = {
  addons: [
    '@storybook/addon-essentials',
    // avoid warning: Expected '@storybook/addon-docs' to be listed before '@storybook/addon-controls'.
    '@storybook/addon-a11y',
    'storybook-addon-performance',
  ],

  core: {
    builder: 'webpack5',
  },

  features: {
    postcss: false,
    previewMdx2: true,
  },

  framework: '@storybook/react',

  stories: [
    '../docs/**/*.mdx', // Load "docs only" guides first.
    '../src/**/*.stories.js', // Load "HTML stories" next.
    '../packages/mds/src/**/*.stories.js', // Load "MDS JSS stories"
  ],

  webpackFinal: async (config) => ({
      ...config,
      stats: { errorDetails: true },
      mode,
      context: path.resolve(__dirname, '../src'),
      resolve: {
        ...config.resolve,
        alias: aliases
      },
      devtool: isProd ? 'eval-nosources-cheap-source-map' : 'eval-cheap-source-map',

      externals: {
        jsdom: true, // For @sm/utils, 'jsdom' to get around build errors.
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            // Do not exclude react-intl modules so they can be transpiled: https://formatjs.io/docs/react-intl#module-bundlers
            exclude: [/node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/],
            use: [
              'babel-loader',
            ],
          },
          { // sass / scss loader for webpack
            test: /\.(sass|scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              'css-loader',
              'sass-loader',
            ],
            sideEffects: true,
          },
          {
            test: /\.mdx$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  plugins: ['@babel/plugin-transform-react-jsx'],
                },
              },
              {
                loader: '@mdx-js/loader',
                options: {
                  compilers: [mdxCompiler({})],
                },
              },
            ],
          },
          {
            test: /\.(jpg|gif|png|svg|ico)$/,
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      plugins: [
        ...config.plugins,
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new webpack.DefinePlugin({
          __CLIENT__: true,
          __PRODUCTION__: isProd,
          'process.env.BROWSER': JSON.stringify(true),
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'process.env.NODE_DEBUG': JSON.stringify(nodeDebug),
        }),
      ],
  }),
};
