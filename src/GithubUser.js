import { useEffect } from "react"
import useGithubUser from "./useGithubUser"

export function GithubUser({username}) {
    const {dati, errore, loading, onFetch} = useGithubUser(username)

    useEffect(() => {
        onFetch()
    }, [])

    return <div>
        {dati && <div>user {dati.name}</div>}
        {errore && <div>ERROR</div>}
        {loading && <div>Loading ...</div>}
    </div>

}