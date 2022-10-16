import React from "react";

export default class UncontrolledLogin extends React.Component {
    _formRef = React.createRef()
    _inputFocus = React.createRef()

    
    submit = (event) => {
        event.preventDefault()
        const user = {
            user : event.target.elements.user.value,
            pass : event.target.elements.pass.value,
            check : event.target.elements.remember.checked,
        }
         
        console.log(user)

        this.props.onLogin(user)
    }


    componentDidMount(){
        this._inputFocus.focus(); 
     }
    


    render() {
        return(
                <form onSubmit={this.submit} ref={this._formRef}>
                    <input type="text" name='user' ref={(input) => { this._inputFocus = input; }}></input>
                    <input type="password" name='pass' ></input>
                    <input type="checkbox" name='remember' ></input>
                    <button >Login</button>
                    <button onClick={this.resetInput}>Reset</button>

                </form>
        )
    }
}