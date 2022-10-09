import React from "react";

export default class Counter extends React.Component{
    state = {
        count: 0
    }

    constructor(props) {
        super(props)

       

        // setInterval(() => {
        //     return this.state.count = state.count + 1;
        // }, 1000);

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + 1
                }
            });
        }, 1000);
    }
    

    render() {
        return <h1>count: {this.state.count}</h1>
    }
}


