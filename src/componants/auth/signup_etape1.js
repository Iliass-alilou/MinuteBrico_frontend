import React, { Component } from 'react';
import InputComp from "../shared/inputComp"
import {Link} from "react-router-dom"
import Axios from 'axios'
import SweetAlert from 'sweetalert2-react';
import './style.css';
const url ="http://localhost:3000";

export default class SignUpEtape1 extends Component {
  state = {
    showErr : false,
    showSuc:false
  }
  save(props){
    var pass1 = document.getElementById("pass1")
    var pass2 = document.getElementById("pass2")
    var email = document.getElementById("IdEmail")
    var password = document.getElementById("pass1")
    if(pass1.value===pass2.value){

      Axios.post("http://localhost:8080/registration",{
        firstName :"iliass",
        lastName : "alilou",
        email : email.value,
        password : password.value   //"iliass@gmail.com"
   })
      .then(res=>{
        this.setState({ showSuc: true })
      })
      .catch(err =>{
        this.setState({
          showErr:true
        })
      })

    }else{
      pass1.style.border="1px solid red"
      pass2.style.border="1px solid red"
    }
  }
  

 generateString(length) {
   const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


  handelbrico(){
        const token=this.generateString(10);
        const href="http://localhost:3000/bricosignup/"+token;
        console.log(href);
        var pass1 = document.getElementById("pass1")
        var pass2 = document.getElementById("pass2")
        var email = document.getElementById("IdEmail")
        var password = document.getElementById("pass1")
        if(pass1.value===pass2.value && pass1.value!=null){
    
          Axios.post("http://localhost:8080/bricoleur",{
            email : email.value,
            password : password.value,
            token:token
               //"iliass@gmail.com"
       })
          .then(res=>{
            this.setState({ showSuc: true })
            document.location.href=href;
          })
          .catch(err =>{
            this.setState({
              showErr:true
            })
          })
    
        }else{
          pass1.style.border="1px solid red"
          pass2.style.border="1px solid red"
        }
        

   

  }
  render() {
    return (
        <div className="SignUpPage">
          <SweetAlert
              show={this.state.showErr}
              title="Error"
              text="cet email est deja existé!"
              onConfirm={() => this.setState({ showErr: false })}
            />
            <SweetAlert
              show={this.state.showSuc}
              title="Success"
              icon='warning'
              text="Merci de verifier votre boite email!"
              onConfirm={() => {
                this.setState({ showSuc: false })
                document.location.href=url
              }}
            />
            
           <Link to="/"> <img alt="..." src="/images/logo.png" className="logo" /></Link>
            <p className="title">Rejoindre MinuteBrico</p>
            <form onSubmit={(e)=>{
              e.preventDefault()
              this.save()
            }}>
                <InputComp className="AdreesInput" title="Adresse e-mail" placeHolder="Adresse e-mail" type="email" name="email" Id="IdEmail"/>
                <InputComp className="AdreesInput" title="Numéro de telephone" placeHolder="Numéro de telephone" type="phone" name="phone" Id=""/>
                <InputComp className="passwordInput" title="Mot de passe" placeHolder="Mot de passe" type="password" name="password1" Id="pass1"/>
                <InputComp className="passwordInput" title="Confimer le mot de passe" placeHolder="Confirmer le mot de passe" type="password" name="password2" Id="pass2"/>
                <input type="submit" className="Submit" value="S'inscrire" />
                <button  className="Submit" onClick={()=>this.handelbrico()}  >Continuer en tant que Bricoleur  </button>
            </form>
            <div className="Or">
              <div className="bar"></div>
              <p className="content">or</p>
              <div className="bar"></div>
            </div>
            <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login" className="btnConnect">Se Connecter</Link></div>
       </div>
    );
  }
}
