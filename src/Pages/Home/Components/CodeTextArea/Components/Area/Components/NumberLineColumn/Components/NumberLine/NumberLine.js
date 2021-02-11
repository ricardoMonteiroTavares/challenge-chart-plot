import React from 'react';
import './NumberLine.css'

export default class NumberLine extends React.Component{
    render(props){
        return <div className="numberLine">{this.props.id}</div>;
    }
}