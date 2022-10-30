import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
                        <li key={index}>

                            <Link to=':username' key={index} user={item} >{item}</Link>
                            <Outlet />
                        </li>
                        
                    </div>)
                })}
            </ul>
        </div>
    )
} 