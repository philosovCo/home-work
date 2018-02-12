import React from "react";
import { render } from "react-dom";
import Calculator from './components/Calculator'
import './style.less'

render(
    <Calculator/>,
    document.getElementById('app')
)
