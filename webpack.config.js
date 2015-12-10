var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './source/index.js'
  ],

  output: {
    filename: 'build.js',
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
          'css-loader?minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        )
      },
      // SVG.
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=20000&mimetype=image/svg+xml'
      },
      // Images.
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000&name=[name]_[sha512:hash:base64:7].[ext]'
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
    new ExtractTextPlugin('build.css', {
      allChunks: true
    }),

    /*
      This adds the `window.fetch` Ajax helper.

      Documentation here:

      https://github.com/github/fetch
    */
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'window.Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      'window.fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}
