import React from "react";

export default class ClickTracker extends React.Component {
    state = {
        click  : '',
    }


    trackButton = (ev) => {
        this.setState(() => {
            return {click: ev.target.id}
        }) 
    }

    render() {
        return (
                <div>
                    <button id='uno' onClick={this.trackButton}>uno</button>
                    <button id='due' onClick={this.trackButton}>due</button>
                    <button id='tre' onClick={this.trackButton}>tre</button>
                    <h2>count: {this.state.click}</h2>
                </div>
        )
    } 
}