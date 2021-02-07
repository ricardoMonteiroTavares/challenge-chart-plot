import React from 'react';
import CodeLine from './Components/CodeLine/CodeLine';
import NumberLine from './Components/NumberLine/NumberLine';
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
        }
    }

    render(){
        return(
            <div className="line">
                <NumberLine id={this.state.id}/>
                <CodeLine />
            </div>
        );
    }
}