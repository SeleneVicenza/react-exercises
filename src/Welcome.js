import React from "react";
import Age from "./Age";

export class Welcome extends React.Component {

    static defaultProps = {
        name: 'guest'
    }
    render() {
        return (
                <div>
                <p>Welcome, {this.props.name}</p>
                <Age age={25} />
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
