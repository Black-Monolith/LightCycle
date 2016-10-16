import * as React from 'react'

import Navbar from '../components/Navbar'

type Props = {
  children: any
}

const App = (props: Props) => (
  <div>
    <Navbar />
    {props.children}
  </div>
)

export default App
