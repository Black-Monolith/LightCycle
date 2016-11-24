import * as React from 'react'
import { Match } from 'react-router'

import App from 'components/App'
import Home from 'components/Home'
import Counter from 'containers/Counter'
import HelpRoutes from './Help'

export default () => (
  <Match path='/' component={App}>
    <Match component={Home} />
    <Match path='counter' component={Counter} />
    {HelpMatchs}
  </Match>
)
