import React from 'react';
import Line from './Line/Line';
import './CodeTextArea.css';

export default class CodeTextArea extends React.Component{
    render(){
        return(
            <div className="textArea">
                <Line />
            </div>            
        );
    }
}