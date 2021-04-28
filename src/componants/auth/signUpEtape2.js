import React, { Component } from 'react';
import InputComp from  "../shared/inputComp"
import {Link} from "react-router-dom"
import './style.css';
import Axios from 'axios'

const SignUpEtape2=()=> {

  function handelForm(){
    const href=window.location.pathname.slice(13);
 
    var nom = document.getElementById("nom")
    var pays = document.getElementById("pays")
    var ville = document.getElementById("ville")
    var langue = document.getElementById("langue")
    var photo = document.getElementById("photo")
    console.log("the href : "+href+nom.value);
    Axios.put("http://localhost:8080/bricoleurup/"+href,{
        firstName :nom.value,
        lastName : nom.value,
        adresse:ville.value+", " +langue.value,
        photo:photo.value,
    
   })
      .then(res=>{
        this.setState({ showSuc: true })
      })
      .catch(err =>{
        this.setState({
          showErr:true
        })
      })
    document.location.href="http://localhost:3000/login";
   }

  
    
    return (
      <form onSubmit={
        (values,e)=>{
          handelForm(values);
          e.preventDefault();
        }
      } >
      <div id="signupbrico" className="fluid-container" >
        <img alt="..." src="/images/12.jpeg" className="bg" />
            <div   className="container">
              <p className="title">Devenir notre MinuteBricoleur<br/> en quelques étapes</p>
                <form>
                  
                  <div className="form-outline mb-4 mt-md-5">
                    <label className="form-label" htmlFor="form5Example1">Nom d'affichage <span style={{color:'red'}}>*</span> </label>
                    <input type="text" id="nom" name="nom" className="form-control" required />
                  </div>

                  
                  <div className="form-outline mb-4">
                    
                  <label className="form-label"  htmlFor="form5Example2">Pays<span style={{color:'red'}}>*</span></label>
                    <select  id="pays" name="pays" className="form-select" required>
                      <option selected>Choisir pays</option>
                      <option value="Maroc">Maroc</option>
                      <option value="France">France</option>
                      <option value="Allmagne">Allmagne</option>

                    </select>
                  
                    <label className="form-label" htmlFor="form5Example2">Ville<span style={{color:'red'}}>*</span></label>
                    <select id="ville" name="ville" className="form-select" required>
                        <option selected>Choisir ville</option>
                        <option value="Chefchaouen">Chefchaouen</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Tanger">Tanger</option>
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form5Example1">Langues<span style={{color:'red'}}>*</span></label>
                    <select id="langue" name="langue" className="form-select" required>
                        <option selected>Choisir langue</option>
                        <option value="Arabe">Arabe</option>
                        <option value="Francais">Francais</option>
                        <option value="Anglais">Anglais</option>
                    </select>  </div>
                  

                  <div className="form-outline mb-4">
                    <label class="form-label" for="customFile">Photo de profil</label>
                    <input type="file"  name="photo" class="form-control" id="photo" />
                    <p>Veuillez importer une photo de vous, préférablement en portrait<br/><span style={{color:'red'}}>Formats supportés: jpeg, jpg, png moins de 2Mo</span></p>
                  </div>
                  <button type="submit" value="save" />
                  <button onClick={()=>handelForm()}  style={{position:"relative",right:"40%",left:"35%",fontSize:"25px"}} className="btn btn-primary btn-block mb-4" value="S'inscrire">S'inscrire</button>
                </form>             
            </div>
      </div>
      </form>
          );
  }

/*<p className="Or">or</p>
          <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login">Se Connecter</Link></div>*/
          export default  SignUpEtape2;