import React, { Component } from 'react'


export default class Clicker extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }
    render () {
        return (
            <div>
                <button onClick={this.handleClick}>{this.props.children}</button>
            </div>
        )
    }

    handleClick = () =>{
        alert(this.props.text)
    }
}