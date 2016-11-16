import * as React from 'react'
import { Link, RouteProps } from 'react-router'

//TODO: Fix typing here
type RouteInjectedProps = {
  route: RouteProps
}

type Props = React.Props<void> & RouteInjectedProps

export default (props: Props) => (
  <div>
    <h1>Need Help?</h1>
    <nav>
      <ul>
        <li>
          <Link to={`${props.route.path}/hello`}>
            Hello
          </Link>
        </li>
        <li>
          <Link to={`${props.route.path}/world`}>
            World
          </Link>
        </li>
      </ul>
    </nav>
    {props.children}
  </div>
)
