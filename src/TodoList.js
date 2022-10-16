import React from "react";

export default class TodoList extends React.Component {
    state = {
        items: [],
        input: ''
    }


    saveInput = (e) => {
        this.setState({input: e.target.value})
    }

    addTask = () => {
        this.setState({items: [...this.state.items, this.state.input]})
    }

    render() {
        return(
            <div>

                <ul>
                    <input type='text' onChange={this.saveInput}></input>
                    <button onClick={this.addTask}>Add task</button>
                    {this.state.items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div> 
        )
    }
}