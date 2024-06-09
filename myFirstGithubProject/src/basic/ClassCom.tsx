import React, { Component } from "react";

export default class ClassCom extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            number: 0,
            msg: 'hello wuyiwu'
        }
    }

    changeNumber(flag: boolean) {
        if (flag) {
            this.setState({
                number: this.state.number + 1
            })
        } else {
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    render() {
        const { msg, number } = this.state
        return (
            <div>
                <div>{msg} --  change number: {number}</div>
                <button onClick={this.changeNumber(true)}> + </button>
                <button onClick={this.changeNumber(false)}> - </button>
                <input value={msg} />
            </div>
        )
    }
}