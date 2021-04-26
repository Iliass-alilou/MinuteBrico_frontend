import React, { Component } from 'react';
import InputComp from  "../shared/inputComp"
import {Link} from "react-router-dom"
import './style.css';
export default class SignUpEtape2 extends Component {
  render() {
    return (
      <div id="signupbrico" className="fluid-container" >
        <img alt="..." src="/images/12.jpeg" className="bg" />
            <div  className="container mt-lg-5 mt-md-5">
              <p className="title">Devenir notre MinuteBricoleur en quelques étapes</p>
              
              {/*<input type="text" placeholder="Nom d'affichage" required="champs requis" />              
              <div>
              <input type="text" placeholder="Pay" required="champs requis"/>
              <input type="text" placeholder="Ville" required="champs requis" />
              </div>             
              <div>
                <select class="select" multiple>
                  <option value="1">Arabe</option>
                  <option value="2">Aglais</option>
                  <option value="3">Francais</option>
                </select>
                <label class="form-label select-label">Langues </label>
              </div>*/}

                <form>
                  {/*<!-- Name input -->*/}
                  <div className="form-outline mb-4">
                    <input type="text" id="form5Example1" className="form-control" />
                    <label className="form-label" htmlFor="form5Example1">Name</label>
                  </div>

                  {/*<!-- Email input -->*/}
                  <div className="form-outline mb-4">
                    <input type="email" id="form5Example2" className="form-control" />
                    <label className="form-label" htmlFor="form5Example2">Email address</label>
                  </div>

                 
                  {/*<!-- Submit button -->*/}
                  <button type="submit" className="btn btn-primary btn-block mb-4">Suivant</button>
                </form>             
            </div>
      </div>
          );
  }
}
/*<p className="Or">or</p>
          <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login">Se Connecter</Link></div>*/