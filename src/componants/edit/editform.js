import React, { Component,useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';
import axios from 'axios';
import moment from 'moment';




class Editform extends Component {

    state = {
        last_name:"",
        first_name:"",
        adresse:"",
        phone:"",
        email:"",
        password : "",
        descriptionProfil : "",
        token : "",
        category : "",
        certifications : "",
        diplomes : "",
        langues:"",
        birth_date:"",
        reviewsOnBrico:"",
        showErr : false,
        

        lang :[],
      }
    
      inputChangee = input => e => {
        this.setState({
            [input]: e.target.value 
        })
    };
    

    componentDidMount(){
        
            axios.get("http://localhost:8080/bricoleur/1").then((reponse)=>{
             
                console.log(reponse.data.lastName)

               this.setState({
                    last_name:reponse.data.lastName,
                    first_name:reponse.data.firstName,
                    adresse:reponse.data.adresse,
                    phone:reponse.data.phone,
                    email:reponse.data.email,
                    password:reponse.data.password,
                    descriptionProfil: reponse.data.descriptionProfil,
                    category: reponse.data.category,
                    certifications: reponse.data.certifications,
                    diplomes: reponse.data.diplomes,
                    langues: reponse.data.langues,
                    reviewsOnBrico : reponse.data.reviewsOnBrico,


                    birth_date:reponse.data.birthDate
               })
            }).catch((err)=>{
                console.log(err);
            })

    }


      
    add_supp = (e)=>{
        e.target.checked===true?this.setState({
            lang:[...this.state.lang,e.target.value]
        }):this.setState({
            lang:this.state.lang.map(ele=>{
                if(ele!==e.target.value){
                    return ele
                }
            })
        })
    }

    continue = e => {
        e.preventDefault();
        const firstName=this.state.firstName;
        const lastName=this.state.lastName;
        const phone =this.state.phone;
        const birthDate=this.state.birthDate;
        const adresse=this.state.adresse;
        if(firstName!==0 && lastName!==0 &&  birthDate!==0 && adresse!==0){
     
            // alert(" here is put " + this.state.first_name);
        
             axios.put("http://localhost:8080/bricoleur/1",{
           
                firstName: this.state.first_name,
                lastName:this.state.last_name,
                adresse: this.state.adresse ,
                birthDate: this.state.birth_date,
                phone:this.state.phone
            }).then((reponse)=>{
                console.log("coucou")
                console.log(reponse.data)
            }).catch((err)=>{
                console.log(err)
            })
            document.location.href="http://localhost:3000/profile_brico_kaoutarDetails";
        }
        else{
            this.setState({ showErr: false })
        }

       
    };

    back = e => {
        e.preventDefault();
        
    }

    
    
    render() {
        const {values , inputChangee} = this.props       
        return (

            <div className="form-container mt-5 mb-5" style={{width:"50%"}}>

            <SweetAlert
              show={this.state.showErr}
              title="Error"
              text="Merci de vérifier tous les champs nécessairs"
              onConfirm={() => this.setState({ showErr: false })}
            />


                <p className="title">Details du Profil</p>
                <div style={{marginLeft:"50px", marginRight:"50px"}}>
                    <form>
                        <h2></h2>
                        <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Nom </label>
                            <input type="text"  className="form-control" id="last_name" name="last_name1" onChange={this.inputChangee('last_name')} value={this.state.last_name}  required />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Prénom</label>
                            <input type="text"  className="form-control" id="first_name" name="first_name1" onChange={this.inputChangee('first_name')} value={this.state.first_name}  required />
                        </div>


                        <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Télephone </label>
                            <input type="text"  className="form-control" id="phone" name="phone1" onChange={this.inputChangee('phone')} value={this.state.phone}  required />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}}>
                            <label className="form-label" htmlFor="form5Example1">Date de Naissance</label>
                            <input type="date" className="form-control" id="birth_date" name="birth_date1"onChange={this.inputChangee('birth_date')} value={moment(this.state.birth_date).format('YYYY-MM-DD')} required  />
                        </div>

                        <h2></h2>
                        {/*
                        <div className=" mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example2">Ville</label> 
                            <select  className="form-select" id="city" name="city1" onChange={inputChange('city')} value={this.state.city} required>
                                <option selected></option>
                                <option value="Rabat">Rabat</option>
                                <option value="Agadir">Agadir</option>
                                <option value="Tanger">Tanger</option>
                                <option value="Casablanca">Casablanca</option>
                                <option value="Fes">Fes</option>
                                <option value="Meknès">Meknès</option>
                                <option value="Tetouan">Tetouan</option>
                                <option value="Ouajda">Ouajda</option>
                                <option value="Nador">Nador</option>
                                <option value="El hoceima">El hoceima</option>
                                <option value="Marrakech">Marrakech </option>
                            </select>        
                        </div>*/}

                        <div className="form-outline mb-4 md-5">
                            <label className="form-label" htmlFor="form5Example1">Adresse </label>
                            <input type="text"  className="form-control" id="adresse" name="adresse1" onChange={this.inputChangee('adresse')} value={this.state.adresse}  required />
                        </div>
                        <h2></h2>
                       {/* <div className="form-outline mb-4 mt-5">
                            <label class="form-label" for="customFile">Photo de profil</label>
                            <input type="file" class="form-control" id="customFile"  onChange={this.inputChangee('photo')} value={this.state.photo} />
                        </div>*/}


                        <button onClick={this.continue} style={{float:'left'}} type="submit" className="btn btn-primary btn-block mb-4">Enregister</button>
                    </form>             
                </div>
            </div>
        )
    }
}
export default Editform;
