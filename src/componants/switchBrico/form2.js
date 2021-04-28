import React, { Component } from 'react'
import DropDownListCheckBox from './dropDownListCheckBox';
import { Link } from 'react-router-dom';


class Form2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        return (
            <div className="form-container mt-5 mb-5 " style={{width:"50%"}}>
                <p className="title mb-lg-4">Citez vos antécédents <br/> professionels! </p>
                <div style={{marginLeft:"50px", marginRight:"50px"}}>
                    <form>
                        <DropDownListCheckBox />
                        <h3 className="Certificat mb-3 mt-5 ml-4 mr-4" style={{color:"#D1653E",fontSize:"20px"}}>Certificat</h3>

                        <div className=" mb-4 md-5 mt-4" >
                            <label className="form-label" htmlFor="form5Example1">Nom du certificat<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="name_certification" name="name_certification1" required />
                        </div>
                        <div className=" mb-4 md-5 mt-4">
                            <label className="form-label" htmlFor="form5Example1">Centre de délivrance<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="name_centre" name="name_centre1" required />
                        </div>

                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Date de délivrance<span style={{color:'red'}}>*</span></label>
                            <input type="date" className="form-control" id="date_obtention" name="date_obtention1"  required  />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label className="form-label" htmlFor="form5Example1">Date d'expiration<span style={{color:'red'}}>*</span></label>
                            <input type="date" className="form-control" id="date_obtention" name="date_obtention1"  required  />
                        </div>

                        <div className=" mb-4 md-5 mt-4">
                            <label className="form-label" htmlFor="form5Example1">Numéro de série ou ID<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="certificat_serie" name="certificat_serie1" required />
                        </div>

                        <div className="form-outline mb-4 mt-5">
                            <label class="form-label" for="customFile">Scan du certificat<span style={{color:'red'}}>*</span></label>
                            <input type="file" class="form-control" id="customFile" />
                            <p style={{fontSize:"12px"}}  >Veuillez importer un scan de votre certificat<br/><span style={{color:'red'}}>Formats supportés: jpeg, jpg, png moins de 2Mo</span></p>
                        </div>

                        <button style={{float:'left'}} type="submit" className="btn btn-primary btn-block mb-4">Retour</button>
                        <button onClick = {this.continue} style={{float:'right'}} type="submit" className="btn btn-primary btn-block mb-4">Suivant</button>

                    </form>
                </div>
            </div>
        )
    }
}
export default Form2;