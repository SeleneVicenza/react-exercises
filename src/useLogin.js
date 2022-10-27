import React, { useState } from "react"

export function useLogin() {
    const [data, setData] = useState({
        user: '',
        pass: '',

    });

    function handleInput(ev) {
        const {name, value} = ev.target
        setData((data) => {
            return {
                ...data,
                [name] : value
            }
        })
    }

    function resetInput() {
        setData({
            user: '',
            pass: '',
            remember: true,
        }) 
    }

    return {data: data, onInput: handleInput, onReset: resetInput}
}