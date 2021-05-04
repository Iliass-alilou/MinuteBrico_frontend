import axios from 'axios';
import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';

const url = "http://localhost:3000/profile_brico";
//const url = "/";

class Form3 extends Component {

    state = {
        showErr : false,
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    CreatBrico = e => {
        const { 
            values: { firstName,lastName,displayName,birthDate,city,adresse,photo,category,certifications,phone} 
        } = this.props;

        e.preventDefault();
        const diplome = document.getElementById("diplome").value.length;
        const school =document.getElementById("school").value.length;
        const annee_entre = document.getElementById("annee_entre").value.length;
        const annee_sortie = document.getElementById("annee_sortie").value.length;
        const diplome_serie = document.getElementById("diplome_serie").value.length;
        const customFile = document.getElementById("customFile").value.length;
        const diplomes=[{
            diplome:diplome,
            school:school,
            annee_entre:annee_entre,
            annee_sortie:annee_sortie,
            diplome_serie:diplome_serie,
            customFile:customFile
        }]

        if(diplome!==0 && school!==0  && annee_entre!==0  && annee_sortie!==0  && diplome_serie!==0 && customFile!==0   ){
           //alert(certifications[0].name_certification);
           axios.post("http://localhost:8080/bricoleur",
            {
                firstName:firstName,
                lastName:lastName,
                displayName : '',
                city : '' ,
                photo : '',
                birthDate:birthDate,
                adresse:adresse,
                phone : '',
                category:category,
                certifications:certifications,
                diplomes:diplomes
            })
            .then(res=>{
               // alert("merci de verifier votre boite pour confirmer votre compte");
                document.location.href=url
            })

        }
        else{
            this.setState({ showErr: true })
          //alert(certifications.name_certification);
        }


    }    


    render() {
     

        return (
            <div className="form-container mt-5 mb-5 " style={{width:"50%"}}>
                 <SweetAlert
                    show={this.state.showErr}
                    title="Error"
                    text="Merci de vérifier tous les champs nécessairs"
                    onConfirm={() => this.setState({ showErr: false })}
                />
                <div style={{marginLeft:"50px", marginRight:"50px"}}>
                    <form>
                        <h1 className="Certificat mb-3 mt-5 ml-4 mr-4" style={{color:"#D1653E",fontSize:"20px"}}>Diplôme</h1>
                        <div className=" mb-4 md-5 mt-4" >
                            <label className="form-label" htmlFor="form5Example1">Nom du diplôme<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="diplome" name="diplome1" required />
                        </div>
                        <div className=" mb-4 md-5 mt-4" >
                            <label className="form-label" htmlFor="form5Example1">Nom de l'école ou centre<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="school" name="school1" required />
                        </div>
                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Date d'entrée<span style={{color:'red'}}>*</span></label>
                            <input type="date" className="form-control" id="annee_entre" name="annee_entre1"  required  />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Date de sortie<span style={{color:'red'}}>*</span></label>
                            <input type="date" className="form-control" id="annee_sortie" name="annee_sortie1"  required  />
                        </div>
                        <div className=" mb-4 md-5 mt-4" >
                            <label className="form-label" htmlFor="form5Example1">Numéro de série ou ID<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="diplome_serie" name="diplome_serie1" required />
                        </div>

                        <div className="form-outline mb-4 mt-5">
                            <label class="form-label" for="customFile">Scan du diplôme<span style={{color:'red'}}>*</span></label>
                            <input type="file" class="form-control" id="customFile" />
                            <p style={{fontSize:"12px"}}  >Veuillez importer un scan de votre diplôme<br/><span style={{color:'red'}}>Formats supportés: jpeg, jpg, png moins de 2Mo</span></p>
                        </div>
                        <button onClick={this.back}  style={{float:'left'}}    className="btn btn-primary btn-block mb-4">Retour</button>
                        <button onClick={this.CreatBrico}  style={{float:'right'}} type="submit" className="btn btn-primary btn-block mb-4">Enregistrer</button>

                    </form>             

                </div>
            </div>
        )
    }
}
export default  Form3; 