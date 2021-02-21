const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const aliases = {};

const babelLoaderConfig = {
  loader: 'babel-loader',
  options: {
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
    ],
    presets: ['@babel/typescript'],
  },
};

const config = {
  entry: [path.join(process.cwd(), 'src/index.ts')],
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
    ],
  },
  plugins: [
    new MonacoWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'SVG Excalidraw Playground',
      template: path.join(__dirname, 'indexTemplate.html'),
    }),
  ],
};

// const esmConfig = {
//   ...baseConfig,
//   output: {
//     filename: 'esm-bundle.js',
//     path: path.resolve(process.cwd(), 'dist'),
//     libraryTarget: 'module',
//     umdNamedDefine: true,
//     module: true,
//   },
//   experiments: {
//     outputModule: true,
//   },
// };

module.exports = config;
// module.exports = [umdConfig, esmConfig];
