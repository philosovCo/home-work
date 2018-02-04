import React, { Component } from 'react'


export default class P extends Component {

    render () {
        return (
            <div>
                <p>{this.props.children}</p>
            </div>
        )
    }

}