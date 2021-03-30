import React, { Component } from 'react';
import "./style.css"
import SignUpEtape1 from "./signup_etape1"
//import SignUpEtape2 from './signUpEtape2' 


export default class Signup extends Component {

  render() {
    return (
      <div className="_Signup">
          <SignUpEtape1 />
    
          <img alt="..." src="/images/12.jpeg" className="bg" />
      </div>
    );
  }
}
