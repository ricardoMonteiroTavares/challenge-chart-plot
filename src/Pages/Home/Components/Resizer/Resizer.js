import React, { PureComponent } from "react";
import './Resizer.css';

export default class Resizer extends PureComponent {
    render = () => <div className="resizer" onMouseDown={this.props.mouseDownHandler} />;
  }