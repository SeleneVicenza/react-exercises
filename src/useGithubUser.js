import { useEffect, useState } from "react";

export default function useGithubUser({username}){
    const [data, setData] = useState()
    const [err, setErr] = useState()


    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err => setErr(err))
    }, [username])

    return {dati: data, errore: err}
}