import React, { Component } from 'react';
import InputComp from  "../shared/inputComp"
import {Link} from "react-router-dom"
import './style.css';
export default class SignUpEtape2 extends Component {
 

  render() {
    return (
      <div id="signupbrico" className="fluid-container" >
        <img alt="..." src="/images/12.jpeg" className="bg" />
            <div   className="container">
              <p className="title">Devenir notre MinuteBricoleur<br/> en quelques étapes</p>
                <form>
                  
                  <div className="form-outline mb-4 mt-md-5">
                    <label className="form-label" htmlFor="form5Example1">Nom d'affichage <span style={{color:'red'}}>*</span> </label>
                    <input type="text" id="form5Example1" className="form-control" required />
                  </div>

                  
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form5Example2">Ville<span style={{color:'red'}}>*</span></label>
                    <input type="email" id="form5Example2" className="form-control" required/>

                    <label className="form-label" htmlFor="form5Example2">Pays<span style={{color:'red'}}>*</span></label>
                    <input type="email" id="form5Example2" className="form-control" required/>
                    
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form5Example1">Langues<span style={{color:'red'}}>*</span></label>
                    <input type="text" id="form5Example1" className="form-control" required />
                  </div>
                  

                  <div className="form-outline mb-4">
                    <label class="form-label" for="customFile">Photo de profil</label>
                    <input type="file" class="form-control" id="customFile" />
                    <p>Veuillez importer une photo de vous, préférablement en portrait<br/><span style={{color:'red'}}>Formats supportés: jpeg, jpg, png moins de 2Mo</span></p>
                  </div>

                  <button style={{float:'left'}} type="submit" className="btn btn-primary btn-block mb-4">Précédent</button>
                  <button style={{float:'right'}} type="submit" className="btn btn-primary btn-block mb-4">Suivant</button>
                </form>             
            </div>
      </div>
          );
  }
}
/*<p className="Or">or</p>
          <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login">Se Connecter</Link></div>*/