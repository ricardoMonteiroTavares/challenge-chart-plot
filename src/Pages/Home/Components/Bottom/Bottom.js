import React from 'react';
import './Bottom.css';

export default class Bottom extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="bottom">
        <button className="button" onClick={this.props.onClick}>GENERATE CHART</button>
      </div>
    );
  }
}