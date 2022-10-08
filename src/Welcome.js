import React from "react";

export class Welcome extends React.Component {

    static defaultProps = {
        name: 'guest'
    }
    render() {
        return (
                <div>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is: {this.props.age}</p>
                </div>
        )
    }
}


// Welcome.defaultProps = {
//     name: 'guest'
// }

// export function Welcome(props) {
//     return <p>Welcome, {props.name}</p>;

// }
