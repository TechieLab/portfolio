var webpack = require('webpack');
var htmlwebplugin = require('html-webpack-plugin');
var  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:'./src/main.ts',
    output:{
        path:'dist/client',
        filename:'app.bundle.js'
    },

    module:{
        loaders:[
            {test: /\.ts$/, loader: 'ts'},
            {
                test: /\.html$/,
                loader: 'html'
            }

        ]
    },
    devtool: 'source-map',
    resolve:{
        extensions:['','.js','.ts']
    },
    plugins:[
        new htmlwebplugin({
            template:'./src/index.html'
        }),

         new CopyWebpackPlugin([{
            from: 'assets',
            to: './assets'
         }])
    ]

}