
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',        
    'app': './src/main.ts'
  },

  output: {
        pathinfo: true,
        path: './dist/client',
        publicPath: 'http://localhost:3030/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

  //target: 'node', // in order to ignore built-in modules like path, fs, etc. 

  //externals: [nodeExternals()],

  devtool: 'eval', 

  resolve: {
     modulesDirectories: [ 
      'node_modules'
    ],
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude:[/node_modules/],
        loaders: ['ts']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: './src/app',
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
         test: /\.scss$/,
         loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },

  progress: true,

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),

    new LiveReloadPlugin(),
    //new CleanWebpackPlugin(['dist'], {
    //    root: '',
    //    verbose: true, 
    //    dry: false,
    //    exclude: ['shared.js']
    //}),

    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),

    new CopyWebpackPlugin([{
      from: 'assets',
      to: './assets'
    }]),

     new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery'
        })
  ]
};