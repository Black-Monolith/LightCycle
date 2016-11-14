import * as React from 'react'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import * as style from './App.scss'

type Props = React.Props<void>

export default (props: Props) => (
  <div className={style['app']}>
    <Header />
    <Navbar />
    {props.children}
  </div>
)
