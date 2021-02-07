import React from 'react';
import CodeLine from './Components/CodeLine/CodeLine';
import NumberLineColumn from './Components/NumberLineColumn/NumberLineColumn';
import './Line.css'

export default class Line extends React.Component{
    constructor(){
        super();
        this.state = {
            isSelected: false,
            isEnabled: true,
            text: "Teste",
            qtdLines: 1,
        };
    }

    setText = e =>{
        console.log(e.target.innerText);
        this.setState({text: e.target.innerText});
    }

    enter = e =>{
        if(e.key === 'Enter'){            
            console.log("Enter foi pressionado");
            var newValue = this.state.qtdLines + 1;
            console.log(newValue);
            this.setState({qtdLines: newValue});
        }
    }

    render(){
        return(
            <div className="line">
                <NumberLineColumn maxLines={this.state.qtdLines}/>
                <CodeLine onChange={this.setText} onKeyPress={this.enter}/>
            </div>
        );
    }
}