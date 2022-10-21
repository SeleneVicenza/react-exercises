import { useEffect, useState } from "react"

export function GithubUser({username}) {
    const [data, setData] = useState()
    const [err, setErr] = useState()

    useEffect( () => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err => setErr(err))

    }, [username])

    return <div>
        {data && <div>user {data.name}</div>}
        {err && <div>ERROR</div>}
    </div>

}