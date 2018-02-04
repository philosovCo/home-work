import React, { Component } from 'react'


export default class H3 extends Component {
    render () {
        return (
            <div>
                <h3>{this.props.children}</h3>
            </div>
        )
    }

}