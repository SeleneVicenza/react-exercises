import React, { useState } from "react"

// export default class ClickCounter extends React.Component {
//     state = {
//         count: 0,

//     }



//     clickCounter = () => {
//         this.setState((state) => {
//             return {count: state.count + 1}
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.clickCounter}>Click counter</button>
//                 <h2>count: {this.state.count}</h2>
//             </div>
//         )
//     }
// }


export default function ClickCounter({initialValue = 0}) {
    const [count, setCount] = useState(initialValue)

    function clickCounter() {
        setCount(count => count + 1)
    }
    

    return (
            <div>
                <button onClick={clickCounter}>Click counter</button>
                <h2>count: {count}</h2>
            </div>
    )
}