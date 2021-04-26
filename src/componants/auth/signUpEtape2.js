import React, { Component } from 'react';
import InputComp from  "../shared/inputComp"
import {Link} from "react-router-dom"
import './style.css';
export default class SignUpEtape2 extends Component {
  render() {
    return (
      <div id="signupbrico" className="fluid-container">
            <div  className="container">
              <p>Devenir notre MinuteBricoleur en quelques étapes</p>
              
              <input type="text" placeholder="Nom d'affichage" required="champs requis" />
              
              <div>
              <input type="text" placeholder="Pay" required="champs requis"/>
              <input type="text" placeholder="Ville" required="champs requis" />
              </div>
              
              <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Langues
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Arabe</a>
                    <a class="dropdown-item" href="#">Anglais</a>
                    <a class="dropdown-item" href="#">Francais</a>
                  </div>
              </div>
              
            </div>
      </div>
          );
  }
}
/*<p className="Or">or</p>
          <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login">Se Connecter</Link></div>*/