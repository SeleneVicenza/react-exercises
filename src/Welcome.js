import React from "react";
import Age from "./Age";

// export class Welcome extends React.Component {

//     static defaultProps = {
//         name: 'guest'
//     }
//     render() {
//         return (
//                 <div className="welcome">
//                     <p>Welcome, {this.props.name}</p>
//                     <Age age={25} />
//                 </div>
//         )
//     }
// }




export default function Welcome({name = 'Guest'}) {
    return (
        <div className="welcome">
            <p>Welcome, {name}</p>
            <Age age={25} />
        </div>
    )
    

}
