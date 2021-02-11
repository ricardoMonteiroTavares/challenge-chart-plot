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

    lineCounter = (text) => {
        var counter = text.split('\n').length;
        this.setState({qtdLines: counter});
        console.log(counter);
    }

    setText = e => {
        console.log(e.target.value);
        var newText = e.target.value;
        this.setState({text: newText});
        this.lineCounter(newText);
    }

    render(){
        return(
            <div className="line">
                <NumberLineColumn style={this.props.style} maxLines={this.state.qtdLines}/>
                <CodeColumn style={this.props.style} onChange={this.setText} value={this.state.text}/>
            </div>
        );
    }
}