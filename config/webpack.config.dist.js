const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');
const aliases = require('./aliases');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

const baseConfig = {
  entry: [path.join(process.cwd(), 'src/client/index.tsx'),],
  mode: 'production',
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
      title: 'SVG to Excalidraw Playground',
      template: path.join(__dirname, 'indexTemplate.html')
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[hash].css',
    //   chunkFilename: '[id].[hash].css'
    // })
  ],
};

const umdConfig = {
  ...baseConfig,
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    library: 'svg-to-excalidraw',
    libraryTarget: 'umd',
    publicPath: '/static/',
    umdNamedDefine: true,
  },
};

const esmConfig = {
  ...baseConfig,
  output: {
    filename: 'esm-bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    libraryTarget: 'module',
    publicPath: '/static/',
    umdNamedDefine: true,
    module: true,
  },
  experiments: {
    outputModule: true,
  },
};

module.exports = [umdConfig, esmConfig];
