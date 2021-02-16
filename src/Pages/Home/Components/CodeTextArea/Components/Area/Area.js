import React from 'react';
import CodeColumn from './Components/CodeColumn/CodeColumn';
import NumberLineColumn from './Components/NumberLineColumn/NumberLineColumn';
import './Area.css'

export default class Area extends React.Component{
    constructor(){
        super();
        this.state = {
            text: "Teste",
            qtdLines: 1,
        };
    }

    render(){
        return(
            <div className="line">
                <NumberLineColumn style={this.props.style} maxLines={this.props.qtdLines}/>
                <CodeColumn style={this.props.style} onChange={this.props.onChange} value={this.props.text}/>
            </div>
        );
    }
}