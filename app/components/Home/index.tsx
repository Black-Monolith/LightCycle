import * as React from 'react'
import * as style from './Home.scss'

const Shortcut = (props: { binding: string }) => (
  <span className={style['shortcut']}>
    {props.binding}
  </span>
)

export default () => (
  <div>
    <h1>Hello.</h1>
    <p>Welcome to LightCycle.</p>
    <p>Use <Shortcut binding='Ctrl+H' /> to display Redux Devtools.</p>
    <p>Use <Shortcut binding='Ctrl+P' /> to change Devtools position.</p>
  </div>
)
