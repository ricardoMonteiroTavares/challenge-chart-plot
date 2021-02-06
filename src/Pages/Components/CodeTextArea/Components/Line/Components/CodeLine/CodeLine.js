import React from 'react';
import './CodeLine.css'

export default class CodeLine extends React.Component{
    constructor(){
        super();
    }

    enter = e =>{
        if(e.key === 'Enter'){            
            console.log("Enter foi pressionado");
        }
    }

    render(){
        return(
            <div
                className="code"
                onKeyPress={this.enter}
                contentEditable={true}
                dangerouslySetInnerHTML={{__html: "Teste"}}
            ></div>
        );
    }

}