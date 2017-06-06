const webpack = require('atool-build/lib/webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
//html插件
const htmlwebpackplugin = require('html-webpack-plugin');

const fs = require('fs');
var path = require('path');
const glob = require('glob');


module.exports = function(webpackConfig) {
  //transform-runtime
  webpackConfig.babel.plugins.push('transform-runtime');
  //antd
  webpackConfig.babel.plugins.push(['antd', {style: 'css',}]);

  // Enable this if you have to support IE8.
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify-loader',
  });

  //分类文件夹,填写对应的from位置
  webpackConfig.plugins.unshift(
    new CopyWebpackPlugin([
        {
          from: './favicon.ico'
        },
        {
          from: './static/css',
          to: './css'
        },
        {
            from: './static/js',
            to: './js'
        },
        {
          from: './static/img',
          to: './images'
        },
        {
          from: './static/iconfont',
          to: './iconfont'
        }])
  );


  //多页面入口--首页和用户页面
  webpackConfig.plugins.push(
    new htmlwebpackplugin({
      filename:'index.html',
      template: './src/page/index.ejs',
      inject: "body",
      chunks:['index'],
      excludeChunks:['common']
    }),
    new htmlwebpackplugin({
      filename:'user.html',
      template: './src/page/user.ejs',
      inject: "body",
      chunks:['user'],
      excludeChunks:['common']
    })
  );

  return webpackConfig;
};

