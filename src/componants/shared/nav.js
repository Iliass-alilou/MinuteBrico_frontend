import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './style.css'
export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/"><img alt="..." src="/images/logo.png" className="logo" /></Link>
        <ul className="center">
          <a href="#comments" ><li>Comment ça marche</li></a>
          <Link to="/missions" ><li>Missions</li></Link>
        </ul>
        <ul className="auth">
          <Link to="/login" ><li className="seconnect">Se connecter</li></Link>
          <Link to="/signup" ><li className="signup">S'incrire</li></Link>
        </ul>
      </div>
    );
  }
}
