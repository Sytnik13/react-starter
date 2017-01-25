var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('../webpack.config');
var React = require('react');
var Router = require('react-router');
var Helmet = require('react-helmet');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
console.log(__dirname);
app.listen(8050, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8050/');
})
