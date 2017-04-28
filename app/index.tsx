import * as React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'

import configureStore from 'store'
import App from 'containers/App'

const store = configureStore()
const history = createHistory()

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

const renderApp = () => render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  rootElement
)

if (module.hot)
  module.hot.accept('containers/App', renderApp)

renderApp()
