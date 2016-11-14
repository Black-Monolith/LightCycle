import * as React from 'react'
import { Provider, Store } from 'react-redux'
import { ReactRouterReduxHistory } from 'react-router-redux'
import { Router, IndexRoute, Route } from 'react-router'

import { State } from 'reducers'

import CounterPage from 'containers/CounterPage'
import Home from 'components/Home'
import App from 'components/App'
import DevTools from 'containers/DevTools'

type Props = {
  history: ReactRouterReduxHistory,
  store: Store<State>
}

export default (props: Props) => (
  <Provider store={props.store}>
    <div>
      <Router history={props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/counter' component={CounterPage} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>
)
