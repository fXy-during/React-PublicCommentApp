'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.tpl.html',
          inject: 'body',
          filename: './index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        // resolve:{
        //     extensions:['','.js','.json']
        // },        
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            },
            // {
            //     test: /\.json?$/,
            //     loader: 'json'
            // },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    devServer: {  //端口代理
        proxy: {
            // 凡是 '/api' 开头的 http 请求，都会被代理到 3000端口
            // koa 代码在 ./mock 目录 ，npm run mock
            './api': {
                target: 'http:localhost:3000', //可更改为线上数据
                secure: false
            }
        },
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true,//终端输出结果为彩色
        historyApiFallback: true,// 不跳转
        inline: true,// 实时更新
        hot: true // 使用热加载插件 HotModuleReplacementPlugin
    }
};
