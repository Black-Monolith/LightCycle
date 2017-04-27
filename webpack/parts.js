const webpack = require('webpack')
const ExtractText = require('extract-text-webpack-plugin')
const PurifyCSS = require('purifycss-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')
const HtmlWebpack = require('html-webpack-plugin')

exports.loadImages = paths => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'file-loader',
        include: paths
      }
    ]
  }
})

exports.loadFonts = paths => ({
  module: {
    rules: [
      {
        test: /\.woff(2)?$/,
        loader: 'url-loader',
        query: {
          name: 'fonts/[hash].[ext]'
        },
        include: paths
      }
    ]
  }
})

exports.setupStyles = paths => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?modules', 'sass-loader'],
        include: paths
      }
    ]
  }
})

exports.compileTypescript = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }],
            'react'
          ]
        }
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader/webpack', 'ts-loader']
      }
    ]
  }
})

exports.createHtmlIndex = () => ({
  plugins: [
    new HtmlWebpack({
      title: 'LightCycle'
    })
  ]
})

exports.extractCSS = paths => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractText.extract(['style-loader', 'css-loader']),
        include: paths
      }
    ]
  },
  plugins: [
    new ExtractText('[name].[chunkhash].css')
  ]
})

exports.purifyCSS = paths => ({
  plugins: [
    new PurifyCSS({
      basePath: process.cwd(),
      paths: [paths]
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

exports.minify = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

exports.extractBundle = options => ({
  entry: [options.entry],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [options.name, 'manifest']
    })
  ]
})

exports.clean = path => ({
  plugins: [
    new CleanWebpack([path], {
      root: process.cwd()
    })
  ]
})
