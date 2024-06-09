import React, { Component } from 'react'

export default class ClassCom extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            number: 0,
            message: 'hello wuyiwu'
        }
    }

    changeNumber = (flag) => {
        this.setState({
            number: flag ? this.state.number + 1 : this.state.number - 1
        })
    }

    changeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        const { message, number } = this.state
        const { name, onClick } = this.props
        return (
            <div>
                ClassCom
                <div>{name}---{message} --- {number}</div>
                <input value={message} onChange={this.changeMessage} />
                <button onClick={ this.changeNumber.bind(this, true) }> + </button>
                <button onClick={() => { this.changeNumber(false) }}> - </button>
                <button onClick={() => { onClick('子组件给父组件的') }}>子组件给父组件的</button>
            </div>
        )
    }
}