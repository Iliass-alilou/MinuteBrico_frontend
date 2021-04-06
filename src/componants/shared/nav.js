import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './style.css'
export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="/?auth=true&email=__ilyasalilou17@gmail.com__"><img alt="..." src="/images/logo.png" className="logo" /></a>
        <ul className="center">
          <a href="#comments" ><li>Comment ça marche</li></a>
          <Link to="/missions" ><li>Missions</li></Link>
        </ul>
        {
          this.props.isAuth===false?(<ul className="auth">
          <Link to="/login" ><li className="seconnect">Se connecter</li></Link>
          <Link to="/signup" ><li className="signup">S'incrire</li></Link>
        </ul>):(<ul className="auth">
           <Link to="/devenir-brico" ><li className="devenirBtn">Devenir bricoleur</li></Link>
           <Link to="/creer-mission" ><li className="creer_mission">Créer mission</li></Link>
           <Link to="/devenir-brico" ><li className="email">{this.props.data.split('__')[1].split("@")[0]}</li></Link>
        </ul>)
        }
      </div>
    );
  }
}
