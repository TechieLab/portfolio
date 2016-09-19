/// <binding AfterBuild='Run - Development' />

var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./config/webpack.common.js');
var helpers = require('./config/helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval',

    output: {
        pathinfo: true,
        path: helpers.root('dist'),
        publicPath: 'http://localhost:5000/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
      new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        contentBase: "./dist",
        host: "localhost",
        port: 49345
    }
});