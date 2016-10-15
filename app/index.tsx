import * as React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import * as createLogger from 'redux-logger'

import getRoutes from './routes'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

const store = createStoreWithMiddleware(rootReducer)
const history = syncHistoryWithStore(browserHistory, store)

console.log(store.getState())

render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes} />
  </Provider>,
  document.body
)
