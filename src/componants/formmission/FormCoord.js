import React, { Component } from 'react';

export class FormCoord extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className= "form-container">
                <h2 className="nb-5" >Faites-nous part de votre adresse et n'ayez pas de soucis de déplacement!</h2>
                <br/>
                <div className = "form-group">
                    <label htmlFor = "address" >Adresse de mission: </label>
                    <input type= "text" className = "form-control" name= "address" onChange= {inputChange('address')} value = {values.address} />
                </div>
                <br/>
                <div className = "form-group">
                    <label htmlFor = "zipcode" >Zip Code: </label>
                    <input type= "number" className = "form-control" name= "zipcode" onChange= {inputChange('zipcode')} value = {values.zipcode} />
                </div>
                <br/>

                <div className = "row">
                    <div className = "col-6">
                         <div className="text-center"> 
                        <button className= "btn btn-secondary" onClick = {this.back}>Page précédente</button>
                              </div>
                    </div>
                    <div className = "col-6">
                        <div className="text-center"> 
                            <button className= "btn btn-primary" onClick = {this.continue}>Page Suivante</button>
                         </div>
                    </div>
                </div>               

            </div>
        )
    }
}

export default FormCoord
