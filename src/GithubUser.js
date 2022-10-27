import { useEffect } from "react"
import useGithubUser from "./useGithubUser"

export function GithubUser({username}) {
    const {dati, errore} = useGithubUser(username)

    return <div>
        {dati && <div>user {dati.name}</div>}
        {errore && <div>ERROR</div>}
    </div>

}