// var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var ReactToHtmlPlugin = require('react-to-html-webpack-plugin')

// var path = require('path')

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    filename: 'index.js',
    path: __dirname + '/build'
  },

  devServer: {
    contentBase: './build',
    hot: true
  },

  module: {
    loaders: [
      // JavaScript.
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // CSS.
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        )
      },
      // SVG.
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      // Images.
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=[name]_[sha512:hash:base64:7].[ext]'
      }
    ]
  },

  postcss: [
    require('autoprefixer-core')
  ],

  resolve: {
    modulesDirectories: [
      'node_modules',
      'components'
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
}
