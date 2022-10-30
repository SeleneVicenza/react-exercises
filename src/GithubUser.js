
import useGithubUser from "./useGithubUser"

export function GithubUser({username}) {
    const {dati, errore, loading} = useGithubUser(username)


    return <div>
        {dati && <div>user {dati.name}</div>}
        {errore && <div>ERROR</div>}
        {loading && <div>Loading ...</div>}
    </div>

}