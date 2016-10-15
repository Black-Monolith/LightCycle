import * as React from "react";
import { Link } from "react-router";

export class Navbar extends React.Component<void, void> {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to={ "/" }> Home </Link>
                    </li>
                    <li>
                        <Link to={ "/counter" }> Counter </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}