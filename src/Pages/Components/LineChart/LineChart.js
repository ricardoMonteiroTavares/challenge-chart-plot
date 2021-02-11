import React from 'react';
import Chart from 'chart.js';

export default class LineChart extends React.Component{

    chartRef = React.createRef();

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <canvas id="myChart" width="400" height="400" ref={this.chartRef}></canvas>
            </div>
        );
    }

    componentDidMount(){
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: 'line',
            data: this.props.data,
            options: this.props.options
        });
    }
}