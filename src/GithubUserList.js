import { useState } from "react";
import { GithubUser } from "./GithubUser";



export function GithubUserList() {
    const [users, setUsers] = useState([])
    const [input, setInput] = useState()

    const saveInput = (e) => {
        setInput(e.target.value)
    }

    const addUsername = () => {
        setUsers([...users, input])
    }
    return (
        <div>

            <input value={input} onChange={saveInput}></input>
            <button onClick={addUsername}>Add</button>

            <ul>
                {users.map((item, index) => {
                    return (<div>
                        <li key={index}><GithubUser username={item} /></li>

                    </div>)
                })}
            </ul>
        </div>
    )
} 