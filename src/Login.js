import { useLogin } from "./useLogin";

// export default class Login extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             user: '',
//             pass: '',
//             remember: true,
//         }
//     }

//     handleInput = (ev) =>{
//         const name = ev.target.name
//         const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value

//         this.setState(() => {
//            return {[name] : value}
//         })
//     }


//     resetInput = () => {
//         this.setState({
//             user: '',
//             pass: '',
//             remember: true,
//         }) 
//     }

//     render() {
//         const bgButton = {
//             backgroundColor: this.state.pass.length <= 8 ? 'red' : 'green'
//         }

//         return (
//                 <form>
//                     <input type="text" name='user' value={this.state.user} onChange={this.handleInput}></input>
//                     <input type="password" name='pass'  value={this.state.pass} onChange={this.handleInput}></input>
//                     <input type="checkbox" name='remember' checked={this.state.remember} onChange={this.handleInput}></input>
//                     <button disabled={!this.state.user || !this.state.pass} style={bgButton} >Login</button>
//                     <button onClick={this.resetInput}>Reset</button>

//                 </form>
//         )
//     }
// }



export default function Login() {
    // const [data, setData] = useState({
    //     user: '',
    //     pass: '',
    //     remember: true,
    // });

    // function handleInput(e) {
    //     const {name, value, type, checked} = e.target
    //     setData((data) => {
    //         return {
    //             ...data,
    //             [name] : type === 'checkbox' ? checked : value,
    //         }
    //     })
    // }
 

    // function resetInput() {
    //     setData({
    //         user: '',
    //         pass: '',
    //         remember: true,
    //     }) 
    // }

    const {data, onInput, onReset} = useLogin()
    
    return (
            <form>
                <input type="text" name='user' value={data.user} onChange={onInput}></input>
                <input type="password" name='pass'  value={data.pass} onChange={onInput}></input>
                {/* <input type="checkbox" name='remember' checked={data.remember} onChange={handleInput}></input> */}
                <button disabled={!data.user || !data.pass} >Login</button>
                <button onClick={onReset}>Reset</button>
            </form>
    )
} 