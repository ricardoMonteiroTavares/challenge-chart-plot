import React from 'react';
import CodeLine from './Components/CodeLine/CodeLine';
import NumberLine from './Components/NumberLine/NumberLine';
import './Line.css'

export default class Line extends React.Component{
    constructor(){
        super();
        this.state = {
            id: 1,
            isSelected: false,
            isEnabled: true
        };
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