import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import getRoutes from 'routes'
import { Props } from 'containers/App'
import DevTools from 'containers/DevTools'

export = (props: Props) => (
  <Provider store={props.store}>
    <div>
      <ConnectedRouter history={props.history}>
        {getRoutes()}
      </ConnectedRouter>
      <DevTools />
    </div>
  </Provider>
)
