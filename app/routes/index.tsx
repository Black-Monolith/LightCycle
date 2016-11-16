import * as React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from 'components/App'
import Home from 'components/Home'
import Counter from 'containers/Counter'
import HelpRoutes from './Help'

export default () => (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='counter' component={Counter} />
    {HelpRoutes}
  </Route>
)
