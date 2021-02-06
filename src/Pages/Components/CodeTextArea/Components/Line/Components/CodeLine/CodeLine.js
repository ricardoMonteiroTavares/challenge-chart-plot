import React from 'react';
import './CodeLine.css'

export default class CodeLine extends React.Component{
    constructor(){
        super();
        this.text = "Teste 2";
    }

    enter = e =>{
        if(e.key === 'Enter'){            
            console.log("Enter foi pressionado");
        }
    }

    setText = e =>{
        console.log(e.target.innerText);
        this.text = e.target.innerText;
    }

    render(){
        return(
            <div
                className="code"
                onKeyPress={this.enter}
                onInput={this.setText}
                contentEditable={true}
                dangerouslySetInnerHTML={{__html: this.text}}
            ></div>
        );
    }

}