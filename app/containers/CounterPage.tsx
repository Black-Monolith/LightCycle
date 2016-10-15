import * as React from "react";
import { connect } from "react-redux";

import { Counter } from "../components/Counter/Counter";
import { Button } from "../components/Counter/Button";
import * as counterActions from "../actions/counter";

type Props = {
    t: any;
    counter: number;
    increment: () => void;
    decrement: () => void;
    incrementAsync: () => void;
}

class CounterPage extends React.Component<Props, void> {
    render() {
        console.log(this.props.counter)
        console.log(this.props.t)
        const { counter, decrement, increment, incrementAsync } = this.props;

        return (
            <div>
                <Counter
                    counter={ counter }
                />
                <div>
                    <Button 
                        action={ increment }
                        text={ "Increment" }
                    />
                    <Button 
                        action={ decrement }
                        text={ "Decrement" }
                    />
                    <Button 
                        action={ incrementAsync }
                        text={ "IncrementAsync" }
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        counter: state.counter.get("value"),
        t: state
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement()),
        incrementAsync: () => dispatch(counterActions.incrementAsync())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);