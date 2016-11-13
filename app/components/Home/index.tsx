import * as React from 'react'

import Shortcut from 'components/Shortcut'

const Home = () => (
  <div>
    <h1>Hello.</h1>
    <p>Welcome to the LightCycle boilerplate.</p>
    <p>Use <Shortcut ctrl letter='H' /> to display Redux Devtools.</p>
    <p>Use <Shortcut ctrl letter='P' /> to change Devtools position.</p>
  </div>
)

export default Home
