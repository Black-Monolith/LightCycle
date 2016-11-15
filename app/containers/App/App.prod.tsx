import * as React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import getRoutes from 'routes'
import { Props } from 'containers/App'

export = (props: Props) => (
  <Provider store={props.store}>
    <Router history={props.history} routes={getRoutes()} />
  </Provider>
)
