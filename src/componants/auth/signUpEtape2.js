import React, { Component } from 'react';
import InputComp from  "../shared/inputComp"
import {Link} from "react-router-dom"

export default class SignUpEtape2 extends Component {
  render() {
    return (<div className="SignUpPage2">
              <Link to="/"><img alt="..." src="/images/logo.png" className="logo" /></Link>
              <p className="title">Rejoindre MinuteBrico</p>
              <form>
              <div className="nom_pre">
                <InputComp title="Nom" placeHolder="Nom" type="text" name="lastName" Id=""/>
                <InputComp title="Prénom" placeHolder="Prénom" type="text" name="firstName" Id=""/>       
              </div>
              <InputComp title="Date de Naissance" placeHolder="Date de Naissance" type="date" name="birthDate" Id=""/>
              <InputComp title="Numéro de téléphone" placeHolder="Numéro de téléphone" type="text" name="nuberPhone" Id=""/>
            
              <input type="submit" className="inputBtn1" value="Continuer en tant que Client" />
              <input type="submit" className="inputBtn2" value="Continuer en tant que Bricoleur" />  
              </form>
          </div>);
  }
}
/*<p className="Or">or</p>
          <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login">Se Connecter</Link></div>*/