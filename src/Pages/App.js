import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Bottom from './Components/Bottom/Bottom.js';
import CodeTextArea from "./Components/CodeTextArea/CodeTextArea.js";
import Resizer from './Components/Resizer/Resizer';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      codeTextAreaHeight: 400,
      resizing: false,
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
    this.setState({
      codeTextAreaHeight: (mousePositionY - 66)
    });
  }

  stopResize = event => {
    console.log('stop');
    this.setState(({
      resizing: false
    }));
    window.removeEventListener("mousemove", this.resize, false);
    window.removeEventListener("mouseup", this.stopResize, false);
  }
  

  render(){
    return (
      <div>
       <Header/>
       <CodeTextArea height={this.state.codeTextAreaHeight}/>
       <Resizer mouseDownHandler={this.mouseDownHandler}/>
       <Bottom/>
      </div>
    );
  }
  
}