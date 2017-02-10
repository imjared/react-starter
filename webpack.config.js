require('dotenv').config();

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const config = {};
module.exports = config;

config.entry = [
  './src/index'
];

const destination = 'dist';

config.output = {
  path: path.join( __dirname, destination ),
  filename: 'bundle.js'
};

config.output.publicPath = '/';

config.plugins = [
  new HtmlWebpackPlugin({
    hash: true,
    template: path.join( __dirname, 'bin', 'html-template.ejs' ),
    title: 'react-starter'
  })
];

// Save us from having to use relative paths to asset dir
config.resolve = {
  root: path.join( __dirname, 'assets' )
};

/*================
 * Shared config
 ================*/

if ( process.env.NODE_ENV === 'production' ) {

  /*================
   * Production
   ================*/
  
  // or devtool: 'eval' to debug issues with compiled output
  config.devtool = 'source-map';

  config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false,
            screw_ie8: true
        }
    }),
    new ExtractTextPlugin('[name].css')
  );

  config.module = {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }, {
      test: /\.js?$/,
      loaders: [
        'babel',
        'eslint-loader'
      ],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  };

} else {

  /*================
   * Development
   ================*/

  const HappyPack = require('happypack');

  config.module = {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
    }, {
      test: /\.js?$/,
      loaders: [
        'happypack/loader'
      ],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(jpg|png)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]'
      }
    }]
  };
  
  // or devtool: 'eval' to debug issues with compiled output:
  config.devtool = 'cheap-module-eval-source-map';

  config.entry.unshift(
    'webpack-hot-middleware/client?noInfo=true'
  );

  config.plugins.unshift(
    new ProgressBarPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin({excludeWarnings: true}),
    new HappyPack({
        loaders: [
          'babel',
          'eslint-loader'
        ]
    })
  );

}
