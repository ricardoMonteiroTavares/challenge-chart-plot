import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis } from 'recharts';

export default class Chart extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.height);
        return(
            <LineChart width={this.props.width} height={this.props.height} data={this.props.data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
            </LineChart>
        );
    }

}