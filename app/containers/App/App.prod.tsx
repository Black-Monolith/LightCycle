import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import getRoutes from 'routes'
import { Props } from 'containers/App'

export = (props: Props) => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      {getRoutes()}
    </ConnectedRouter>
  </Provider>
)
