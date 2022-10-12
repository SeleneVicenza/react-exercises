import React from "react";
import { Welcome } from "./Welcome";

export default class InteractiveWelcome extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            value : '',
        }

            

    }

    handleName = (ev)=> {
        this.setState(() => {
            return {value: ev.target.value}
        }) 
    }



    render() {
        return (
            <div>
               <input onChange={this.handleName}></input>
               <Welcome name={this.state.value} />
            </div> 
        )
    }
}