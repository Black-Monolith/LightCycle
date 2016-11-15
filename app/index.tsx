import * as React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'

import configureStore from 'store'
import App from 'containers/App'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

render(
  <AppContainer>
    <App store={store} history={history}/>
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextApp = require<{ default: typeof App }>('containers/App').default

    render(
      <AppContainer>
        <NextApp store={store} history={history}/>
      </AppContainer>,
      rootElement
    )
  })
}
