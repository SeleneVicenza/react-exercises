import React from "react";

export default class TodoList extends React.Component {
    state = {
        items: [],
        input: ''
    }


    clearArray = () => {
        this.setState({items: []})
    }

    saveInput = (e) => {
        this.setState({ input: e.target.value })
    }

    addTask = () => {
        this.setState({ items: [...this.state.items, this.state.input] })

        this.setState({ input: '' })
    }

    render() {
        return (
            <div>

                <ul>
                    <input type='text' onChange={this.saveInput} value={this.state.input}></input>
                    <button onClick={this.addTask}>Add task</button>
                    <button onClick={this.clearArray}>Reset</button>
                    {this.state.items.map((item, index) => {
                        return (<div>
                            <li key={index}>{item}</li>
                         
                        </div>)

                    })}
                </ul>
            </div>
        )
    }
}