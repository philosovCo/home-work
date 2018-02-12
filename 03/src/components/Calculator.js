import React, {Component} from 'react'
import CalcKey from './CalcKey'


export default class Calculator extends Component {

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <CalcKey>C</CalcKey>
                        <td ></td>
                        <td></td>
                        <CalcKey>+</CalcKey>
                    </tr>
                    <tr>
                        <CalcKey>1</CalcKey>
                        <CalcKey>2</CalcKey>
                        <CalcKey>3</CalcKey>
                        <CalcKey>–</CalcKey>
                    </tr>
                    <tr>
                        <CalcKey>4</CalcKey>
                        <CalcKey>5</CalcKey>
                        <CalcKey>6</CalcKey>
                        <CalcKey>*</CalcKey>
                    </tr>
                    <tr>
                        <CalcKey>7</CalcKey>
                        <CalcKey>8</CalcKey>
                        <CalcKey>9</CalcKey>
                        <CalcKey>/</CalcKey>
                    </tr>
                    <tr>
                        <td></td>
                        <CalcKey>0</CalcKey>
                        <td></td>
                        <CalcKey>=</CalcKey>
                    </tr>
                </table>
            </div>
        )
    }
}