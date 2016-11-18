const webpack = require('webpack')
const merge = require('webpack-merge')
const parts = require('./parts')
const common = require('./webpack.common')

const config = merge(
  {
    devtool: 'eval',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server'
    ],
    devServer: {
      hot: true,
      historyApiFallback: true,
      inline: true,
      stats: 'errors-only',
      host: 'localhost',
      port: 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  parts.createHtmlIndex(),
  parts.loadImages(common.paths.images),
  parts.loadFonts(common.paths.fonts),
  parts.setupStyles(common.paths.style),
  parts.compileTypescript(),
  common.config
)

module.exports = config
