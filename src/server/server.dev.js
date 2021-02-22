const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require(path.join(
  process.cwd(),
  'config/webpack.config.dev'
));

const PORT = 3001;
const html = fs.readFileSync(path.join(__dirname, 'index.html'), {
  encoding: 'utf8',
});

const compiler = webpack(webpackConfig);

const app = express();

app.use(
  devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

app.use(hotMiddleware(compiler));

app.use('/st', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  console.log('got here');
  res.send(html);
});

const server = http.createServer({}, app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
