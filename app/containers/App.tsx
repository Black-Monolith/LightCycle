import * as React from 'react'
import { Component } from 'react'

import Navbar from 'components/Navbar'

export default class App extends Component<void, void> {
  render() {
    return <div>
      <Navbar />
      {this.props.children}
    </div>
  }
}
