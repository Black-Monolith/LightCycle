import * as React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import getRoutes from 'routes'
import { Props } from 'containers/App'
import DevTools from 'containers/DevTools'

export = (props: Props) => (
  <Provider store={props.store}>
    <div>
      <Router history={props.history} routes={getRoutes()} />
      <DevTools />
    </div>
  </Provider>
)
