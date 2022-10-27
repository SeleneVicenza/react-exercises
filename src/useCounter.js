import { useState } from "react"

export function useCounter(initialValue = 0){
    const [count, setCount] = useState(initialValue)

    function handleIncrement() {
        setCount(c => c + 1)
    }

    function handleDecrement() {
        setCount(c => c - 1)
    }

    function handleReset() {
        setCount(initialValue)
    }

    return {counter: count, onIncrement: handleIncrement, onReset: handleReset, onDecrement: handleDecrement}
}