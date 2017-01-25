var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8050',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
    module: {
      loaders: [
          { test: /\.jsx?$/, loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'], include: path.join(__dirname, 'src'), exclude: [/node_modules/] },
          { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
          { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
          { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
          { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
          { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
          { test: /\.json$/, loader: 'json-loader'},
          { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
          { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'}
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};
