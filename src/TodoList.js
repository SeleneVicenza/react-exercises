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

    removeListItem = (index) => {
        let array = [...this.state.items]
        array.splice(index, 1)
        this.setState(() => {
            return {items: array}
        })
    }

    render() {
        return (
            <div>
                    <input type='text' onChange={this.saveInput} value={this.state.input}></input>
                    <button onClick={this.addTask}>Add task</button>
                    <button onClick={this.clearArray}>Reset</button>
                    {this.props.render(this.state.items, this.removeListItem)}
                
            </div>
        )
    }
}