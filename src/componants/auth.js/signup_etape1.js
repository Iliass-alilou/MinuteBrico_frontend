import React, { Component } from 'react';

export default class SignUpEtape1 extends Component {
  render() {
    return (
        <div className="SignUpPage">
            <img alt="..." src="/images/logo.png" className="logo" />
            <p className="title">Rejoindre MinuteBrico</p>
            <form>
                <InputComp title="Adresse e-mail" placeHolder="Adresse e-mail" type="text" name="email" Id=""/>
                <InputComp title="Mot de passe" placeHolder="Mot de passe" type="password" name="password" Id=""/>
                <input type="submit" className="Submit" value="Continuer" />
            </form>
            <p className="Or">or</p>
            <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login" className="btnConnect">Se Connecter</Link></div>
       </div>
    );
  }
}
