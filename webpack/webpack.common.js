const { join } = require('path')
const projectRoot = join(__dirname, '..')

exports.paths = {
  app: join(projectRoot, 'app'),
  style: join(projectRoot, 'app'),
  fonts: join(projectRoot, 'app/assets/fonts'),
  images: join(projectRoot, 'app/assets/images'),
  build: join(projectRoot, 'build')
}

exports.config =
  {
    entry: [
      'assets/fonts/index.scss',
      'global.scss',
      'index.tsx'
    ],
    resolve: {
      modules: [
        'node_modules',
        'app'
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']
    }
  }
