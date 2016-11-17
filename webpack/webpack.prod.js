const merge = require('webpack-merge')
const parts = require('./parts')
const common = require('./webpack.common')

module.exports = merge(
  {
    devtool: 'source-map',
    output: {
      path: common.paths.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    }
  },
  parts.clean(common.paths.build),
  parts.setFreeVariable('process.env.NODE_ENV', 'production'),
  parts.extractBundle({ name: 'vendor', entry: 'react' }),
  parts.extractCSS(common.paths.style),
  parts.purifyCSS(common.paths.app),
  parts.minify(),
  parts.createHtmlIndex(),
  parts.compileTypescript(),
  parts.loadImages(common.paths.images),
  parts.loadFonts(common.paths.fonts),
  parts.setupStyles(common.paths.style),
  common.config
)
