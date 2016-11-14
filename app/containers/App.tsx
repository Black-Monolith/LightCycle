import * as React from 'react'
import { ReactRouterReduxHistory } from 'react-router-redux'
import { Router, IndexRoute, Route } from 'react-router'

import Counter from 'containers/Counter'
import Home from 'components/Home'
import App from 'components/App'
import DevTools from 'containers/DevTools'

type Props = {
  history: ReactRouterReduxHistory
}

export default (props: Props) => (
  <div>
    <Router history={props.history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/counter' component={Counter} />
      </Route>
    </Router>
    <DevTools />
  </div>
)
