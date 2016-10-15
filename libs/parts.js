const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack-plugin')

exports.devServer = options => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: options.host,
    port: options.port
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
})

exports.setupCSS = paths => ({
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules'],
        include: paths
      }
    ]
  }
})

exports.minify = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

exports.setFreeVariable = (key, value) => ({
  plugins: [
    new webpack.DefinePlugin({
      [key]: JSON.stringify(value)
    })
  ]
})

exports.extractBundle = options => ({
  entry: {
    [options.name]: options.entries
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [options.name, 'manifest']
    })
  ]
})

exports.clean = path => ({
  plugins: [
    new CleanWebpackPlugin([path], {
      root: process.cwd()
    })
  ]
})

exports.extractCSS = paths => ({
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        include: paths
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
})

exports.purifyCSS = paths => ({
  plugins: [
    new PurifyCSSPlugin({
      basePath: process.cwd(),
      paths: paths
    })
  ]
})

exports.compileTypescript = path => ({
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts'
      }
    ]
  }
})
