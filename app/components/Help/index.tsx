import * as React from 'react'
import { Link } from 'react-router'

type Props = React.Props<void>

export default (props: Props) => (
  <div>
    <h1>Need Help?</h1>
    <nav>
      <ul>
        <li>
          <Link to='/help/hello'>
            Hello
          </Link>
        </li>
        <li>
          <Link to='/help/world'>
            World
          </Link>
        </li>
      </ul>
    </nav>
    {props.children}
  </div>
)
