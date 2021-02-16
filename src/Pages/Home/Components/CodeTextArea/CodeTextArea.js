import React from 'react';
import Area from './Components/Area/Area';
import './CodeTextArea.css';

export default class CodeTextArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const style = {height: this.props.height+'px'}
        return(
            <div style={style} className="textArea">
                <Area style={style} onChange={this.props.onChange} text={this.props.text} qtdLines={this.props.qtdLines}/>
            </div>            
        );
    }
}