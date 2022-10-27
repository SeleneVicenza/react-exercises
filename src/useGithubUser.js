import { useState } from "react";

export default function useGithubUser(username){
    const [data, setData] = useState()
    const [err, setErr] = useState()
    const [load, setLoad] = useState(false)

    function fetchApi() {
        setLoad(true)
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err => setErr(err))
        .finally(() => {setLoad(false)})
    }

    return {dati: data, errore: err, loading: load, onFetch: fetchApi}
}