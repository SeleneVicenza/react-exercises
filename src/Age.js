import React from "react";

export default class Age extends React.Component{
    render() {
        return this.props.age > 18 && this.props.age < 65 && this.props.name === 'John' && <p>Your age is: {this.props.age}</p>
    }
}