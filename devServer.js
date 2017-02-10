var path = require('path');
var express = require('express');
var webpack = require('webpack');
var historyApiFallback = require('connect-history-api-fallback');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use( historyApiFallback({
  verbose: false
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
