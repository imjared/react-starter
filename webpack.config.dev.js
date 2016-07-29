var autoprefixer = require('autoprefixer');
var path = require('path');
var precss = require('precss');
var webpack = require('webpack');

module.exports = {
    // or devtool: 'eval' to debug issues with compiled output:
    devtool: 'cheap-module-eval-source-map',
    entry: [
        // listen to code updates emitted by hot middleware:
        'webpack-hot-middleware/client?noInfo=true',
        // your code:
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
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
    }
};
