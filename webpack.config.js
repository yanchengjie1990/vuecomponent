var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');//此插件会自动往index主页插入合并好的js文件
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
//var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
//.js 文件使用 babel 来编译处理
var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "stage-0"
      ],
      "plugins": []
    }
  },
  {
    "test": /\.vue?$/,
    "loader": "vue"
  },
  {
        test: /\.css$/,//css
        loaders: ['style', 'css']
  },
  //.css 正则匹配 文件使用 style-loader 和 css-loader 来处理
//{ test: /\.css$/, loader: "style!css" }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: loaders
  }
};
