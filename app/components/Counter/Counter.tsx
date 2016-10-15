import * as React from "react";

type Props = {
    counter: number
}

export class Counter extends React.Component<Props, void> {
    render() {
        const { counter } = this.props;

        return (
            <div>
                <h1>Counter</h1>
                { counter }
            </div>
        );
    }
}