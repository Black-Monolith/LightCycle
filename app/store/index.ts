import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer, { State } from 'reducers'
import DevTools from 'containers/DevTools'

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(
      applyMiddleware(
        thunkMiddleware
      )
    ) as StoreEnhancer<State>
    : compose(
      applyMiddleware(
        thunkMiddleware,
        createLogger()
      ),
      DevTools.instrument()
    ) as StoreEnhancer<State>

export default (initialState?: State) => {
  const store = createStore<State>(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('reducers', () =>
      store.replaceReducer(require<typeof rootReducer>('reducers'))
    )
  }
  return store
}
