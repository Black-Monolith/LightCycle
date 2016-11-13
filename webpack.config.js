const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const validate = require('webpack-validator')
const when = require('when-switch').default

const parts = require('./webpack.parts')

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'app')
  ],
  images: path.join(__dirname, 'app', 'images'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    app: path.join(PATHS.app, 'index.tsx')
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate'
    })
  ]
}

const config =
  when(process.env.npm_lifecycle_event)
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
        entries: ['react']
      }),
      parts.minify(),
      parts.loadImages(PATHS.images),
      parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.app]),
      parts.compileTypescript(PATHS.app)
    ))
    .else(merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.hotModuleReplacement(),
      parts.loadImages(PATHS.images),
      parts.setupCSS(PATHS.style),
      parts.compileTypescript(PATHS.app),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      })
    ))

module.exports = validate(config, {
  quiet: true
})
