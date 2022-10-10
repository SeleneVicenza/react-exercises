import React from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends React.Component{
    state = {
        count: this.props.initial
    }

    constructor(props) {
        super(props)

       

        // setInterval(() => {
        //     return this.state.count = state.count + 1;
        // }, 1000);

        // setInterval(() => {
        //     this.setState((state) => {
        //         return {
        //             count: state.count + this.props.increment
        //         }
        //     });
        // }, this.props.interval);
    }
    

    render() {
        return <CounterDisplay count={this.state.count}/>
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.increment
                }
            });
        }, this.props.interval);
    }
}

Counter.defaultProps = {
    initial : 0,
    increment : 1,
    interval : 1000
}


