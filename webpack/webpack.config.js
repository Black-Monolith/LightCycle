const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const when = require('when-switch').default

const parts = require('./webpack.parts')
const appRoot = path.join(__dirname, '../app')

const PATHS = {
  app: appRoot,
  style: [
    appRoot
  ],
  fonts: [
    path.join(appRoot, 'assets/fonts')
  ],
  images: path.join(appRoot, 'assets/images'),
  build: path.join(appRoot, '../build')
}

const common = {
  entry: [
    'assets/fonts/index.scss',
    'global.scss',
    'index.tsx'
  ],
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    modulesDirectories: ['app', 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LightCycle'
    })
  ]
}

module.exports =
  when(process.env.npm_lifecycle_event)

    // Production config
    .is('build', merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: 'react'
      }),
      parts.minify(),
      parts.loadImages(PATHS.images),
      parts.loadFonts(PATHS.fonts),
      parts.setupCSS(PATHS.style),
      parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.app]),
      parts.compileTypescript(PATHS.app)
    ))

    // Development config
    .else(merge(
      parts.hotModuleReplacement(),
      common,
      {
        devtool: 'eval'
      },
      parts.loadImages(PATHS.images),
      parts.loadFonts(PATHS.fonts),
      parts.setupCSS(PATHS.style),
      parts.compileTypescript(PATHS.app)
    ))
