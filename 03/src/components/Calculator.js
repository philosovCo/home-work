import React, {Component} from 'react'
import CalcKey from './CalcKey'

const CalculatorOperations = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue
}

export default class Calculator extends Component {


    state = {
        backValue: null,
        operator: null,
        displayValue: '0'
    };

    _number = btnNumber => {
        const {displayValue} = this.state
        this.setState({
            displayValue: displayValue === '0' ? String(btnNumber) : displayValue + btnNumber
        })
    }


    _clearAll = () => {
        this.setState({
            backValue: null,
            displayValue: '0',
            operator: null
        })
    }

    calculateOperation = () => {
        const {backValue, displayValue, operator} = this.state
        const inputValue = parseFloat(displayValue)
        const currentValue = backValue || 0
        if (backValue != null) {
            this.setState({
                displayValue: CalculatorOperations[operator](currentValue, inputValue),
                backValue: null,
                operator: null
            })
        }
    }

    performOperation = nextOperator => {
        const {backValue, displayValue, operator} = this.state
        const inputValue = parseFloat(displayValue)

        if (backValue == null) {
            this.setState({
                backValue: inputValue,
                displayValue: '0'
            })
        } else if (operator) {
            const currentValue = backValue || 0
            const newValue = CalculatorOperations[operator](currentValue, inputValue)

            this.setState({
                backValue: newValue,
                displayValue: '0'
            })
        }

        this.setState({
            operator: nextOperator
        })
    }

    handleKeyDown = (event) => {
        let {key} = event

        if (key === 'Enter')
            key = '='

        if ((/\d/).test(key)) {
            event.preventDefault()
            this._number(parseInt(key, 10))
        } else if (key in CalculatorOperations) {
            event.preventDefault()
            this.performOperation(key)
        } else if (key === '=') {
            event.preventDefault()
            this.calculateOperation()
        } else if (key === 'Backspace') {
            event.preventDefault()
            this._clearAll()
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    render() {
        const {displayValue, backValue, operator} = this.state
        return (
            <div className="main">
                <table align="center">
                    <tr>
                        <td colSpan="4">
                            <div align="right">{backValue}</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <div align="right">{operator}</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4"><input className="calcDisplay" value={displayValue}/></td>
                    </tr>
                    <tr>
                        <CalcKey action="C" clickHandler={this._clearAll} className = "action"/>
                        <td></td>
                        <td></td>
                        <CalcKey action="+" clickHandler={this.performOperation} className = "action"/>
                    </tr>
                    <tr>
                        <CalcKey action="1" clickHandler={this._number}/>
                        <CalcKey action="2" clickHandler={this._number}/>
                        <CalcKey action="3" clickHandler={this._number}/>
                        <CalcKey action="-" clickHandler={this.performOperation} className = "action"/>
                    </tr>
                    <tr>
                        <CalcKey action="4" clickHandler={this._number}/>
                        <CalcKey action="5" clickHandler={this._number}/>
                        <CalcKey action="6" clickHandler={this._number}/>
                        <CalcKey action="*" clickHandler={this.performOperation} className = "action"/>
                    </tr>
                    <tr>
                        <CalcKey action="7" clickHandler={this._number}/>
                        <CalcKey action="8" clickHandler={this._number}/>
                        <CalcKey action="9" clickHandler={this._number}/>
                        <CalcKey action="/" clickHandler={this.performOperation} className = "action"/>
                    </tr>
                    <tr>
                        <td></td>
                        <CalcKey action="0" clickHandler={this._number}/>
                        <td></td>
                        <CalcKey action="=" clickHandler={this.calculateOperation} className = "action"/>
                    </tr>
                </table>
            </div>
        )
    }
}