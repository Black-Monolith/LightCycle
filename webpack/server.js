const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const port = process.env.PORT || 3000

new WebpackDevServer(
  webpack(config),
  {
    hot: true,
    historyApiFallback: true
  }
)
  .listen(port, 'localhost', err =>
    err ?
      console.error(err) :
      console.log(`Listening at localhost:${port}`)
  )
