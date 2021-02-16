import React, {Component} from 'react';
import NumberLine from './Components/NumberLine/NumberLine';
import './NumberLineColumn.css'

export default class NumberLineColumn extends Component{

    constructor(props) {
        super(props);
    }

    generate = (max) => {
        var lines = [];
        for(var i = 1; i <= max; i++){
            lines.push(<NumberLine key={i} id={i}/>)
        }
        return lines
    }

    render(){
        return(
            <div className="overflow">
                <div style={this.props.style} className="col">
                    {this.generate(this.props.maxLines)}
                </div>
            </div>
        );
    }
}