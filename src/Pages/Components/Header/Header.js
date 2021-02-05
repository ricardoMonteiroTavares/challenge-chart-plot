import React from 'react';
import './Header.css'

export default class Header extends React.Component{
  render(){
    return(
      <div>
        <header className="header">
          <h1 className="title">Ricardo's Challange</h1>
        </header>
      </div>
    );
  }
}