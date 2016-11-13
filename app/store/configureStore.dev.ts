import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as createLogger from 'redux-logger'
import rootReducer, { State } from '../reducers'
import DevTools from '../containers/DevTools'

const loggerMiddleware = createLogger()

const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  DevTools.instrument()
)

export = (initialState?: State) => {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers') as typeof rootReducer)
    )
  }
  return store
}
