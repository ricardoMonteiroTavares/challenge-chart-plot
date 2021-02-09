import React from 'react';
import './CodeLine.css'

export default class CodeLine extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <textarea
                className="code"
                style={this.props.style}
                onChange={this.props.onChange}
                value={this.props.value}
            ></textarea>
        );
    }

}