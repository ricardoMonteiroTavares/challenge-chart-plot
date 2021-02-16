import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Bottom from './Components/Bottom/Bottom.js';
import CodeTextArea from "./Components/CodeTextArea/CodeTextArea.js";
import Resizer from './Components/Resizer/Resizer';
import Chart from './Components/Chart/Chart.js';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      codeTextAreaHeight: (this.props.height-(66*2))/2,
      graphicHeight: (this.props.height-(66*2))/2,
      resizing: false,
      text: "Teste",
      qtdLines: 1,
      data: [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
        {name: 'Page C', uv: 300, pv: 2400, amt: 2400},
        {name: 'Page D', uv: 200, pv: 2400, amt: 2400},
        {name: 'Page E', uv: 275, pv: 2400, amt: 2400},
        {name: 'Page F', uv: 195, pv: 2400, amt: 2400}
      ],
    };
  }
  mouseDownHandler = e => {
      this.setState(({
        resizing: true,   
      }), () => {
        window.addEventListener("mousemove", this.resize, false);
        window.addEventListener("mouseup", this.stopResize, false);
      });
  }

  resize = event => {
    const mousePositionY = event.clientY;
    this.setState(prevState=>{
      return {
      codeTextAreaHeight: (mousePositionY - 66),
      graphicHeight: (prevState.height - 66 - mousePositionY)
    }});
  }

  stopResize = event => {
    console.log('stop');
    this.setState(({
      resizing: false
    }));
    window.removeEventListener("mousemove", this.resize, false);
    window.removeEventListener("mouseup", this.stopResize, false);
  }
  
  setText = e => {
    console.log(e.target.value);
    var newText = e.target.value;
    this.setState({text: newText});
    this.lineCounter(newText);
  }

  lineCounter = (text) => {
    var counter = text.split('\n').length;
    this.setState({qtdLines: counter});
    console.log(counter);
  }

  generateChart = () => {
    var str = this.state.text.replaceAll("\'", "\"");
    str = str.replaceAll(new RegExp("(\\w+)([:])",'g'), "\"$1\"$2");
    str = str.replaceAll("\n", ",");
    str = "["+str+"]";
    var resp = JSON.parse(str);
    console.log("---JSON Data---")
    console.log(resp);
  }

  render(){
    return (
      <div>
       <Header/>
       <CodeTextArea height={this.state.codeTextAreaHeight} onChange={this.setText} text={this.state.text} qtdLines={this.state.qtdLines}/>
       <Resizer mouseDownHandler={this.mouseDownHandler}/>
       <Chart data={this.state.data} height={this.state.graphicHeight} width={this.props.width}/>
       <Bottom onClick={this.generateChart}/>
      </div>
    );
  }
  
}