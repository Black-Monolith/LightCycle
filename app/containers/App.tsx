import * as React from "react";

import { Navbar } from "../components/Navbar";

export class App extends React.Component<void, void> {
    render() {
        const { children } = this.props;

        return (
            <div>
                <Navbar />
                { children }
            </div>
        );
    }
}