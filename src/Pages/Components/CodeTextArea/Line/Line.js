import React from 'react';
import './Line.css'

export default class Line extends React.Component{
    constructor(){
        super();
        this.state = {
            lineNumber: 1,
            text: "Teste",
            isSelected: false
        };
    }
    render(){
        return(
            <div className="line">
                <div className="lineNumber">{this.state.lineNumber}</div>
                <div className="code">{this.state.text}</div>
            </div>
        );
    }
}