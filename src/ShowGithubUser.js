import { useParams } from "react-router-dom"
import { GithubUser } from "./GithubUser"

export default function ShowGithubUser() {
    const {user} = useParams()
    return <GithubUser username={user}/>
}