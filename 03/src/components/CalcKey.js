import React, {Component} from 'react'

export default class CalcKey extends Component {

    _handleClick = () => {
        const { action, clickHandler } = this.props

        clickHandler(action)
    }

    static defaultProps = {
        className: '',
    }

    render() {
        const {action,className} = this.props
        return (
                <td>
                    <button onClick={this._handleClick} className={`${className}  calcKey`}>{action}</button>
                </td>
        )
    }
}