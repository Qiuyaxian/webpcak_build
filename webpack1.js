const path = require('path');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ENV = (process.env.ENV = process.env.NODE_ENV = 'production');
const conf = require('./config');

module.exports = {
    mode: ENV,
    devtool: conf.dev.devtool,
    entry: {
      main: path.resolve(__dirname, './examples/index.js') // 应用主入口
    },
    output: {
      path: path.resolve(__dirname, 'dist'), // 输出到目录
      filename: '[name].js'
    },
    resolve: {
      extensions: ['*', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
        // 指定html模板
        new HtmlWebpackPlugin({
            template: './examples/index.html',
            inject: 'body',
            xhtml: true,
            minify: true
        }),
        new DefinePlugin({
          'ENV': JSON.stringify(ENV)
        }),
        new MiniCssExtractPlugin({ 
          filename: '[name]-[hash].css', 
          chunkFilename: '[name]-[chunkhash].css' 
        })
    ],
    optimization: {
      
    },
    devServer: {
      port: 4201, // 测试服务器端口
      host: '127.0.0.1', // 测试服务器IP
      historyApiFallback: true, // 缓存?
      watchOptions: {
        ignored: /node_modules/ // 忽略
      }
    },
    node: {
      global: true,
      crypto: 'empty',
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false,
      fs: 'empty'
    }
}
