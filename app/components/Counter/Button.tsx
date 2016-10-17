import * as React from 'react'

type Props = {
  text: string,
  action: () => void
}

const Button = (props: Props) =>
  <button onClick={props.action}>
    {props.text}
  </button>

export default Button
