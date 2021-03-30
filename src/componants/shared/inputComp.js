import React, { Component } from 'react';
import "./style.css"

//this for input info for login and signup
export default class InputComp extends Component {
  render() {
    return (
      <div className="InputComp">
          <p className="title">{this.props.title}</p>
          <input className="Input" required  placeholder={this.props.placeHolder} type={this.props.type}  name={this.props.name} id={this.props.Id} />
      </div>
    );
  }
}
