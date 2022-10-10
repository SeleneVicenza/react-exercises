import React from "react";

export default class CounterDisplay extends React.Component{
    state = {
        count: this.props.initial
    }

    constructor(props) {
        super(props)

       

        // setInterval(() => {
        //     return this.state.count = state.count + 1;
        // }, 1000);

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.increment
                }
            });
        }, this.props.interval);
    }
    

    render() {
        return <h1>count: {this.state.count}</h1>
    }
}

CounterDisplay.defaultProps = {
    initial : 0,
    increment : 1,
    interval : 1000,
}