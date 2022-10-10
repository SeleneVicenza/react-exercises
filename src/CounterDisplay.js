import React from "react";

export default class CounterDisplay extends React.Component{
    render() {
        return <h1>count: {this.props.count}</h1>
    }
}