const path = require('path')
const merge = require('webpack-merge')
const when = require('when-switch').default

const parts = require('./webpack.parts')
const appRoot = path.join(__dirname, '../app')

const PATHS = {
  app: appRoot,
  style: appRoot,
  fonts: path.join(appRoot, 'assets/fonts'),
  images: path.join(appRoot, 'assets/images'),
  build: path.join(appRoot, '../build')
}

const common = merge(
  {
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
      modules: [
        'app',
        'node_modules'
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']
    }
  },
  parts.createHtml(),
  parts.compileTypescript(),
  parts.loadImages(PATHS.images),
  parts.loadFonts(PATHS.fonts),
  parts.setupCSS(PATHS.style)
)

module.exports =
  when(process.env.npm_lifecycle_event)

    // Production config
    .is('build', merge(
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable('process.env.NODE_ENV', 'production'),
      parts.extractBundle({ name: 'vendor', entry: 'react' }),
      parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.app]),
      parts.minify(),
      common
    ))

    // Development config
    .else(merge(
      { devtool: 'eval' },
      parts.devServer('localhost', 3000),
      common
    ))
