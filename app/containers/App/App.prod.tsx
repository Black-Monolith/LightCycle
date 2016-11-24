import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

import getRoutes from 'routes'
import { Props } from 'containers/App'

export = (props: Props) => (
  <Provider store={props.store}>
    <BrowserRouter history={props.history} routes={getRoutes()} />
  </Provider>
)
