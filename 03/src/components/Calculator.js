import React, {Component} from 'react'
import CalcKey from './CalcKey'


export default class Calculator extends Component {

    state = {
        value: null,
        displayValue: '0',
        operator: null,
        waitingForOperand: false
    };

    clearAll() {
        this.setState({
            value: null,
            displayValue: '0',
            operator: null,
            waitingForOperand: false
        })
    }

    inputDigit(digit) {
        const {displayValue,waitingForOperand } = this.state

        if (waitingForOperand) {
            this.setState({
                displayValue: String(digit),
                waitingForOperand: false
            })
        } else {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
            })
        }
    }

    performOperation(nextOperator) {
        const { value, displayValue, operator } = this.state
        const inputValue = parseFloat(displayValue)
        const CalculatorOperations = {
            '/': (prevValue, nextValue) => prevValue / nextValue,
            '*': (prevValue, nextValue) => prevValue * nextValue,
            '+': (prevValue, nextValue) => prevValue + nextValue,
            '-': (prevValue, nextValue) => prevValue - nextValue,
            '=': (prevValue, nextValue) => nextValue
        }
        if (value == null) {
            this.setState({
                value: inputValue
            })
        } else if (operator) {
            const currentValue = value || 0
            const newValue = CalculatorOperations[operator](currentValue, inputValue)

            this.setState({
                value: newValue,
                displayValue: String(newValue)
            })
        }

        this.setState({
            waitingForOperand: false,
            operator: nextOperator
        })
    }

    render() {
        return (
            <div className="main" >
                <table align="center">
                    <tr>
                        <td colSpan="4" ><div align="right">{this.state.value}</div></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><div align="right">{this.state.operator}</div></td>
                    </tr>
                    <tr>
                        <td colSpan="4" ><input className="calcDisplay" value={this.state.displayValue} /></td>
                    </tr>
                    <tr>
                        <CalcKey onClick= {() => this.clearAll()}>C</CalcKey>
                        <td></td>
                        <td></td>
                        <CalcKey onClick={() => this.performOperation('+')}>+</CalcKey>
                    </tr>
                    <tr>
                        <CalcKey onClick={() => this.inputDigit(1)}>1</CalcKey>
                        <CalcKey onClick={() => this.inputDigit(2)}>2</CalcKey>
                        <CalcKey onClick={() => this.inputDigit(3)}>3</CalcKey>
                        <CalcKey onClick={() => this.performOperation('-')}>–</CalcKey>
                    </tr>
                    <tr>
                        <CalcKey  onClick={() => this.inputDigit(4)}>4</CalcKey>
                        <CalcKey  onClick={() => this.inputDigit(5)}>5</CalcKey>
                        <CalcKey  onClick={() => this.inputDigit(6)}>6</CalcKey>
                        <CalcKey onClick={() => this.performOperation('*')}>*</CalcKey>
                    </tr>
                    <tr>
                        <CalcKey onClick={() => this.inputDigit(7)}>7</CalcKey>
                        <CalcKey onClick={() => this.inputDigit(8)}>8</CalcKey>
                        <CalcKey onClick={() => this.inputDigit(9)}>9</CalcKey>
                        <CalcKey onClick={() => this.performOperation('/')}>/</CalcKey>
                    </tr>
                    <tr>
                        <td></td>
                        <CalcKey onClick={() => this.inputDigit(0)}>0</CalcKey>
                        <td></td>
                        <CalcKey onClick={() => this.performOperation('=')}>=</CalcKey>
                    </tr>
                </table>
            </div>
        )
    }
}