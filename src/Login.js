import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            pass: '',
            remember: true,
        }
    }

    handleInput = (ev) =>{
        const name = ev.target.name
        const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value

        this.setState(() => {
           return {[name] : value}
        })
    }

    render() {
        return (
                <form>
                    <input type="text" name='user' value={this.state.user} onChange={this.handleInput}></input>
                    <input type="password" name='pass'  value={this.state.pass} onChange={this.handleInput}></input>
                    <input type="checkbox" name='remember' checked={this.state.remember} onChange={this.handleInput}></input>
                    <button disabled={!this.state.user || !this.state.pass}>Login</button>
                </form>
        )
    }
}