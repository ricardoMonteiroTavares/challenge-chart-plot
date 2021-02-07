import React from 'react';
import './CodeLine.css'

export default class CodeLine extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div
                className="code"
                onKeyPress={this.props.onKeyPress}
                onInput={this.props.onChange}
                contentEditable={true}
                dangerouslySetInnerHTML={{__html: "Teste"}}
            ></div>
        );
    }

}