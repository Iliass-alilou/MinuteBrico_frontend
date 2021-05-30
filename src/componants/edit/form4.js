import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';


class Form4 extends Component {

    state = {
        showErr : false,
        lang :[]
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
        //alert(this.state.lang)
    }

    continue = e => {
        e.preventDefault();
        const firstName=document.getElementById("firstName").value.length;
        const lastName=document.getElementById("lastName").value.length;
        const showName=document.getElementById("showName").value.length;
        const birthDate=document.getElementById("birthDate").value.length;
        const city=document.getElementById("city").value.length;
        const adresse=document.getElementById("adresse").value.length;

        if(firstName!==0 && lastName!==0 && showName!==0 && birthDate!==0 && city!==0 && this.state.lang.length!==0 && adresse!==0){
            this.props.nextStep();
        }
        else{
            this.setState({ showErr: true })
        }
    };

    back = e => {
        e.preventDefault();
        
    }
    
    render() {
        const { values, inputChange } = this.props;
        
        return (

            <div className="form-container mt-5 mb-5" style={{width:"50%"}}>

            <SweetAlert
              show={this.state.showErr}
              title="Error"
              text="Merci de vérifier tous les champs nécessairs"
              onConfirm={() => this.setState({ showErr: false })}
            />


                <p className="title">Mot de passe</p>
                <div style={{marginLeft:"50px", marginRight:"50px"}}>
                    <form>
                        <h2></h2>
                        <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"block"}} >
                            <label className="form-label" htmlFor="form5Example1">Mot de passe actuel </label>
                            <input type="text"  className="form-control" id="adresse" name="adresse1" onChange={inputChange('adresse')} value={values.adresse}  required />
                        </div>

                        
                        
                        <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"block"}} >
                            <label className="form-label" htmlFor="form5Example1">Nouveau mot de pasee </label>
                            <input type="text"  className="form-control" id="adresse" name="adresse1" onChange={inputChange('adresse')} value={values.adresse}  required />
                        </div>

                        <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"block"}} >
                            <label className="form-label" htmlFor="form5Example1">Confirmer le mot de passe </label>
                            <input type="text"  className="form-control" id="adresse" name="adresse1" onChange={inputChange('adresse')} value={values.adresse}  required />
                        </div>

                        <button onClick={this.continue} style={{float:'left'}} type="submit" className="btn btn-primary btn-block mb-4">Enregister</button>
                    </form>             
                </div>
            </div>
        )
    }
}
export default Form4;
