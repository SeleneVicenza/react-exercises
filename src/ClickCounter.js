import React, { useState, useEffect} from "react"
import { useCounter } from "./useCounter"

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


export default function ClickCounter({initialValue = 0}, props) {
    const { counter, onIncrement, onReset, onDecrement } = useCounter(initialValue)
    return (
            <div>
                <h2>count: {counter}</h2>
                <button onClick={onIncrement}>Incdrement</button>
                <button onClick={onDecrement}>Decrement</button>
                <button onClick={onReset}>Reset</button>

            </div>
    )
}