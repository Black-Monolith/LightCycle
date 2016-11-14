import * as React from 'react'
import * as style from './Shortcut.scss'

type Props = {
  ctrl?: boolean,
  cmd?: boolean,
  alt?: boolean,
  letter: string
}

export default (props: Props) => (
  <span className={style['shortcut']}>
    {
      [
        props.ctrl ? 'Ctrl' : null,
        props.cmd ? 'Cmd' : null,
        props.alt ? 'Alt' : null,
        props.letter
      ]
        .filter(x => x !== null)
        .join('+')
    }
  </span>
)
