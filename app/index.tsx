import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'

import getRoutes from './routes'
import DevTools from './containers/DevTools'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <div>
    <Provider store={store}>
      <div>
        <Router history={history} routes={getRoutes} />
        <DevTools />
      </div>
    </Provider>
  </div>,
  document.body
)
