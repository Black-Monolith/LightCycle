
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import * as React from 'react'

import styles from './Component.css'

type Props = {
  title: string
}

type State = {
  counter: number
}

export default class
  extends React.Component<Props, State> {

  timer: number

  constructor(props: Props) {
    super()

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.startTimer.call(this)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  incrementTimer() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  startTimer() {
    this.timer = setInterval(
      this.incrementTimer.bind(this),
      1000
    )
  }

  render() {
    return <div className={styles.component}>
      <h1>{this.props.title}</h1>
      <p>{this.state.counter}</p>
    </div>
  }

}
