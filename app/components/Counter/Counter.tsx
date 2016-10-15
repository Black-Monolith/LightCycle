import * as React from 'react'

type Props = {
  counter: number
}

export class Counter extends React.Component<Props, void> {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        {this.props.counter}
      </div>
    )
  }
}
