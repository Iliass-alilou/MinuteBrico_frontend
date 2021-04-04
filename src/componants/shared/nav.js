import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './style.css'
export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/"><img alt="..." src="/images/logo.png" className="logo" /></Link>
        <ul className="center">
          <Link to="/how-it-works" ><li>Comment ça marche</li></Link>
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
