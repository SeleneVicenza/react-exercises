import useSWR from "swr";


export default function useGithubUser(username){
    const fetchApi = (url) => {
        fetch(url)
        .then(response => response.json())
    }

    const {data, err} = useSWR(`https://api.github.com/users/${username}`, fetchApi)

    

    return {dati: data, errore: err, loading: !data && !err,}
}