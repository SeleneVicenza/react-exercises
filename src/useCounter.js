import { useCallback, useState } from "react"

export function useCounter(initialValue = 0){
    const [count, setCount] = useState(initialValue)

    const handleIncrement = useCallback(function handleIncrement() {
        setCount(c => c + 1)
    }, [])
    
    const handleDecrement = useCallback(function handleDecrement() {
        setCount(c => c - 1)
    }, [])
    

    const handleReset = useCallback(function handleReset() {
        setCount(initialValue)
    })

    return {counter: count, onIncrement: handleIncrement, onReset: handleReset, onDecrement: handleDecrement}
}