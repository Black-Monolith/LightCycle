import * as React from 'react'
import { IndexRoute, Route } from 'react-router'

import Root from 'containers/Root'
import CounterPage from 'containers/CounterPage'
import Home from 'components/Home'

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='/counter' component={CounterPage} />
  </Route>
)
