import * as React from 'react'

type Props = {
  text: string,
  action: () => void
}

export class Button extends React.Component<Props, void> {
  render() {
    const { action, text } = this.props

    return (
      <button
        onClick={action}>
        {text}
      </button>
    )
  }
}
