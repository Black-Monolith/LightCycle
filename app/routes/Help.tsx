import * as React from 'react'
import { Route } from 'react-router'

import Help from 'components/Help'
import HelpHello from 'components/Help/pages/Hello'
import HelpWorld from 'components/Help/pages/World'

export default (
  <Route path='help' component={Help}>
    <Route path='hello' component={HelpHello} />
    <Route path='world' component={HelpWorld} />
  </Route>
)
