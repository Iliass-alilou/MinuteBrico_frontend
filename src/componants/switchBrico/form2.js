import React, { Component } from 'react'
import DropDownListCheckBox from './dropDownListCheckBox';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';


class Form2 extends Component {
    state = {
        showErr : false,
        name_certification : '',
        name_centre : '',
        date_obtention : '',
        date_expiration : '',
        certificat_serie: '',
        customFile : ''
    }
    inputChangeCertif = input => e => {
        this.setState({
            [input]: e.target.value 
           
        });
    
    }  
    setCategorie=(cat)=>{
        //this.setState({ category: cat });
        this.props.setCategory(cat);
        
    }   
    continue = e => {
       

        e.preventDefault();

        const categorySelected =document.getElementById("categorySelected").value.length;
        
        const name_certification=document.getElementById("name_certification").value.length;
        const name_centre =document.getElementById("name_centre").value.length;
        const date_obtention = document.getElementById("date_obtention").value.length;
        const date_expiration = document.getElementById("date_expiration").value.length;
        const certificat_serie = document.getElementById("certificat_serie").value.certificat_serie;
        const customFile = document .getElementById("customFile").value.length;

        
        if( name_certification!==0  && name_centre!==0 && date_obtention!==0  && date_expiration!==0  && certificat_serie!==0 && customFile!==0 && categorySelected!==0){
            const certif=[{
                name_certification :this.state.name_certification ,
                name_centre : this.state.name_centre,
                date_obtention : this.state.date_obtention,
                date_expiration : this.state.date_expiration,
                certificat_serie: this.state.certificat_serie,
                customFile : this.state.customFile
            }];
            this.props.inputChangecertif(certif);
            this.props.nextStep();
        }
        else{
            this.setState({ showErr: true })
         alert(this.state.category[0].name);
          }
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;
        return (
            <div className="form-container mt-5 mb-5 " style={{width:"50%"}}>
                <SweetAlert
                    show={this.state.showErr}
                    title="Error"
                    text="Merci de vérifier tous les champs nécessairs"
                    onConfirm={() => this.setState({ showErr: false })}
                />

                <p className="title mb-lg-4">Citez vos antécédents <br/> professionels! </p>
                <div style={{marginLeft:"50px", marginRight:"50px"}}>
                    <form>

                        <DropDownListCheckBox inputChange={inputChange('category')} setCategory={this.setCategorie}  />

                        <h3 className="Certificat mb-3 mt-5 ml-4 mr-4" style={{color:"#D1653E",fontSize:"20px"}}>Certificat</h3>

                        <div className=" mb-4 md-5 mt-4" >
                            <label className="form-label" htmlFor="form5Example1">Nom du certificat<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="name_certification" name="name_certification1" onChange={this.inputChangeCertif('name_certification')} value={this.state.name_certification}  required />
                        </div>

                        <div className=" mb-4 md-5 mt-4">
                            <label className="form-label" htmlFor="form5Example1">Centre de délivrance<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="name_centre" name="name_centre1" onChange={this.inputChangeCertif('name_centre')} value={this.state.name_centre} required />
                        </div>

                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Date de délivrance<span style={{color:'red'}}>*</span></label>
                            <input type="date" className="form-control" id="date_obtention" name="date_obtention1" onChange={this.inputChangeCertif('date_obtention')} value={this.state.date_obtention}  required  />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Date d'expiration<span style={{color:'red'}}>*</span></label>
                            <input type="date" className="form-control" id="date_expiration" name="date_obtention1" onChange={this.inputChangeCertif('date_expiration')} value={this.state.date_expiration}  required  />
                        </div>
                        <div className=" mb-4 md-5 mt-4">
                            <label className="form-label" htmlFor="form5Example1">Numéro de série ou ID<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="certificat_serie" name="certificat_serie1" onChange={this.inputChangeCertif('certificat_serie')} value={this.state.certificat_serie} required />
                        </div>

                        <div className="form-outline mb-4 mt-5">
                            <label className="form-label" for="customFile">Scan du certificat<span style={{color:'red'}}>*</span></label>
                            <input type="file" className="form-control" id="customFile" onChange={this.inputChangeCertif('customFile')} value={this.state.customFile} />
                            <p style={{fontSize:"12px"}}  >Veuillez importer un scan de votre certificat<br/><span style={{color:'red'}}>Formats supportés: jpeg, jpg, png moins de 2Mo</span></p>
                        </div>

                        <button onClick = {this.back} style={{float:'left'}}    className="btn btn-primary btn-block mb-4">Retour</button>
                        <button onClick = {this.continue} style={{float:'right'}} type="submit" className="btn btn-primary btn-block mb-4">Suivant</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Form2;