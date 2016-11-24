import * as React from 'react'
import { Match } from 'react-router'

import Help from 'components/Help'
import HelpHello from 'components/Help/pages/Hello'
import HelpWorld from 'components/Help/pages/World'

export default (
  <Match path='help' component={Help}>
    <Match path='hello' component={HelpHello} />
    <Match path='world' component={HelpWorld} />
  </Match>
)
