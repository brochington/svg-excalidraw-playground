const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const aliases = require('./aliases');

const babelLoaderConfig = {
  loader: 'babel-loader',
  options: {
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
    presets: ['@babel/preset-react', '@babel/typescript'],
  },
};

const config = {
  entry: [path.join(process.cwd(), 'src/index.tsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dev_build'),
    umdNamedDefine: true,
  },
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    alias: { ...aliases },
    extensions: ['.js', '.mjs', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: path.join(process.cwd(), 'src'),
        use: [babelLoaderConfig],
      },
      {
        test: /\.m?js$/,
        include: path.join(process.cwd(), 'src'),
        use: [babelLoaderConfig],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['html', 'json'],
    }),
    new HtmlWebpackPlugin({
      title: 'SVG Excalidraw Playground',
      template: path.join(__dirname, 'indexTemplate.html'),
    }),
  ],
};

module.exports = config;
