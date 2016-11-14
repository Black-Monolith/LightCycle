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
    <App history={history} store={store} />
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextApp = require<{ default: typeof App }>('./containers/App').default

    render(
      <AppContainer>
        <NextApp history={history} store={store} />
      </AppContainer>,
      rootElement
    )
  })
}
