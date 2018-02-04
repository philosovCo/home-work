import React, { Component } from 'react'
import Div from './components/Div'
import H3 from './components/H3'
import P from "./components/P";
import Clicker from "./components/Clicker";


export default class App extends Component {

    constructor(props){
        super(props)
    }
    render () {
        return (
            <Div>
                <H3>Вторая домашняя работа</H3>
                <P>What is the text to fill the field</P>
                <Clicker text="Нажатие принято">Click me</Clicker>
            </Div>
        )
    }


}