import * as React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import configureStore from 'store'
import App from 'containers/App'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

render(
  <AppContainer>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextApp = require<{ default: typeof App }>('./containers/App').default

    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp history={history} />
        </Provider>
      </AppContainer>,
      rootElement
    )
  })
}
