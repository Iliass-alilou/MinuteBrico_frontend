import React ,{ Component, useContext } from 'react';
import "./style.css"
import InputComp from "../shared/inputComp"
import {Link} from "react-router-dom"
import Axios from "axios"
import SweetAlert from 'sweetalert2-react';
import Cookies from 'js-cookie';

export default class Login extends Component {


  state = {
    showErr : false,
  }
  verify = ()=>{
    const email = document.getElementById("Idemail")
    const password = document.getElementById("Idpassword")


    
    Axios.post("http://localhost:8080/signIn",{
      email:email.value,
      password:password.value
     
    })
    .then(res=>{
      console.log(res.data)
      if(res.data.enabled==true){

          const authToken = 'asfgsedfgheiruhinsdnsadsdfsadfasaf';
          Cookies.set('token',authToken)

          document.location.href="http://localhost:3000?auth=true&email=__"+res.data.email+"__"
      }else{
        this.setState({ showErr: true })
      }
  
  })
  .catch(err =>{
    console.log("still have error ",err);
  })
  }

  render() {
    return (
      <div className="_Signup">
          <div className="SignUpPage">


          <SweetAlert
              show={this.state.showErr}
              title="Error"
              text="Verifier votre email ou password"
              onConfirm={() => this.setState({ showErr: false })}
            />


           <Link to="/"> <img alt="..." src="/images/logo.png" className="logo" /></Link>
            <p className="title">Connecter à votre compte</p>
            <form onSubmit={(e)=>{
              e.preventDefault()
              this.verify()
            }}>
                <InputComp className="AdreesInput" title="Adresse e-mail" placeHolder="Adresse e-mail" type="email" name="email" Id="Idemail"/>
                <InputComp className="passwordInput" title="Mot de passe" placeHolder="Mot de passe" type="password" name="password" Id="Idpassword"/>
                <input type="submit" className="Submit" value="Se connecte" />
            </form>
            <div className="Or">
              <div className="bar"></div>
              <p className="content">or</p>
              <div className="bar"></div>
            </div>
            <div className="DejaSeconnact">Vous n'avez pas de compte? <Link to="/signup" className="btnConnect">S'inscrire</Link></div>
       </div>
          <img alt="..." src="/images/12.jpeg" className="bg" />
      </div>
    );
  }
}
