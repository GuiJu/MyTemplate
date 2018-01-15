const webpack = require('webpack');
const path = require('path');
const OUTPUT_PATH = path.resolve(__dirname, 'dist/js');
const APP_PATH = path.resolve(__dirname, 'app');
const IMG_PATH = path.resolve(__dirname, 'img');

module.exports = {
  entry: {
    index: './app/index.js'
  },
  devtool: 'inline-source-map',
  output: {
    // __dirname: 全局变量, 存储的是文件所在的文件目录
    // path.resolve()(node)将一系列路径或路径片段解析为一个绝对路径
    path: OUTPUT_PATH,
    filename: '[name].bundle.js'
  },
  devServer: {
    // 本地服务器所加载页面所在目录
    contentBase: './',
    // 是否跳转, 单页面时使用ture
    historyApiFallback: true,
    // inline模式, 表示脚本将会在动态重载时被插入到bundle中
    inline: true,
    // 允许Hot Module Replacement功能
    hot: true
  },
  module: {
    rules: [
      {
        // test: 一个用以匹配loaders所处理文件的拓展名的正则表达式(必须)
        test: /(\.js|\.jsx)$/,
        // include/exclude: 手动添加必须处理的文件(文件夹)或屏蔽不需要处理的文件(文件夹)(可选)
        exclude: /^node_modules$/,
        use: {
          loader: 'babel-loader'
          // 此处的options: {...} 单独提取到了.babelrc中
          // 其中的transform-class-properties用于支持static = {}写在class中的ES7写法
        }
      },
      {
        test: /\.css$/,
        // 此处对同一类文件引入多个loader
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|otf|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 也用于热加载, 配置后会显示更新的模块名称
    new webpack.NamedModulesPlugin(),
    // 热加载插件: npm install --save-dev babel-plugin-react-transform react-transform-hmr
    new webpack.HotModuleReplacementPlugin()
  ]
};