import React, {Component} from 'react';
import NumberLine from './Components/NumberLine/NumberLine';
import './NumberLineColumn.css'

export default class NumberLineColumn extends Component{

    generate = (max) => {
        var lines = [];
        for(var i = 1; i <= max; i++){
            lines.push(<NumberLine key={i} id={i}/>)
        }
        return lines
    }

    render(props){
        return(
            <div className="col">
                {this.generate(this.props.maxLines)}
            </div>
        );
    }
}