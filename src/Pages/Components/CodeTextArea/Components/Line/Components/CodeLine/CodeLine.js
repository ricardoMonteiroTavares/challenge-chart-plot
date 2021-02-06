import React from 'react';
import './CodeLine.css'

export default class CodeLine extends React.Component{
    constructor(){
        super();
        this.state = {
            text: "Teste",
        };
    }
    render(){
        return <div className="code">{this.state.text}</div>;
    }
}