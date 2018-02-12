import React, {Component} from 'react'

export default class CalcKey extends Component {

    render() {
        return (
                <td>
                    <button>{this.props.children}</button>
                </td>
        )
    }
}