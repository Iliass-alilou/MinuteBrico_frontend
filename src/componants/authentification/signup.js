import React, { Component } from 'react'
import InputComp from "../shared/inputComp"
import {Link} from "react-router-dom"
import Axios from 'axios'
import SweetAlert from 'sweetalert2-react';
const url ="http://localhost:3000";

class Signup extends Component {
    state = {
        typeClient:null,
        showErr : false,
        showSuc:false,
        showErrbrico:false
      }
    
      save(props,type){
        var pass1 = document.getElementById("pass1")
        var pass2 = document.getElementById("pass2")
        var email = document.getElementById("IdEmail")
        var password = document.getElementById("pass1")

        var pass12 = document.getElementById("pass1").value.length;
        var pass22 = document.getElementById("pass2").value.length;
        if(pass1.value==pass2.value  && pass12!==0 && pass22!==0 ){
    
          Axios.post("http://localhost:8080/registration",{
            firstName :"iliass",
            lastName : "alilou",
            email : email.value,
            password : password.value   //"iliass@gmail.com"
       })
          .then(res=>{
            
            if(this.state.typeClient==2){
                this.continue();
            }else{
                this.setState({ showSuc: true })
            }
          })
          .catch(err =>{
            this.setState({
              showErr:true
            })
            this.continue();
          })
    
        }else{
          pass1.style.border="1px solid red"
          pass2.style.border="1px solid red"
        }
        return true;
      }
      onSubmit=(e,type)=>{
        e.preventDefault()
        this.save()
        this.setState({
           typeClient:type 
        })
        
    }


      continue = () => {
        //preventDefault();

        const IdEmail =document.getElementById("IdEmail").value.length;
        const phoneNumber =document.getElementById("phoneNumber").value.length;
        const pass1 = document.getElementById("pass1").value.length;
        const pass2 = document.getElementById("pass2").value.length; 
        if(IdEmail !==0 &&  phoneNumber !==0 && pass1 !==0 && pass2 !==0 ){
            this.props.nextStep();
        }
        else{
            this.setState({ showErrbrico: true })
        }
     };

     

    render() {
        return (
            <div className="_Signup">
                <div className="SignUpPage">

                    <SweetAlert
                        show={this.state.showErrbrico}
                        title="Error"
                        text="Merci de vérifier tous les champs nécessairs avant de continuer!"
                        onConfirm={() => this.setState({ showErrbrico: false })}
                    />
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

                    <form >

                        <InputComp className="AdreesInput" title="Adresse e-mail" placeHolder="Adresse e-mail" type="email" name="email" Id="IdEmail"/>
                        <InputComp className="AdreesInput" title="Numéro de telephone" placeHolder="Numéro de telephone" type="phone" name="phone" Id="phoneNumber"/>
                        <InputComp className="passwordInput" title="Mot de passe" placeHolder="Mot de passe" type="password" name="password1" Id="pass1"/>
                        <InputComp className="passwordInput" title="Confimer le mot de passe" placeHolder="Confirmer le mot de passe" type="password" name="password2" Id="pass2"/>
                        <input onClick={(e)=>{
                           this.onSubmit(e,1)                      
                        }} type="submit" className="Submit" value="S'inscrire" />
                        <input onClick={(e)=>{
                           this.onSubmit(e,2)                      
                        }} type="submit" className="Submit" value="Continuer en tant que Bricoleur" />
                        {/*<button onClick={this.continue}  type="Submit" className="Submit" >Continuer en tant que Bricoleur  </button>*/}
                    </form>
                    <div className="Or">
                        <div className="bar"></div>
                        <p className="content">or</p>
                        <div className="bar"></div>
                    </div>
                    <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login" className="btnConnect">Se Connecter</Link></div>
                </div>
                
                <img alt="..." src="/images/12.jpeg" className="bg" />
            </div>
        )
    }
}
export default Signup ;
