import React, { Component } from 'react';
import Select from 'react-select'


export class FormPay extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    onChange = ee => {
        this.setState({value : ee.target});
    } 


    render() {
        const { values, inputChange } = this.props;

        const options = [
            { value: 'small', label: '100-500 Dhs' },
            { value: 'medium', label: '500-2000 Dhs' },
            { value: 'big', label: '2000-10000 Dhs' }
          ]
        
        return (
            <div className= "form-container">
                <h2 className="nb-5" >Comment voulez vous payer votre MinuteBricoleur? </h2>
                <br/>


                <div className = "form-group">
                <label htmlFor = "paymode" >Mode de paiment: </label>
                                <div className = "form-group"> 
                                       <label className="text-center">Prix Fixe</label>
                                       <br/>

                                       <input type= "radio" 
                                            value = "Prix Fixe"
                                            onChange= {this.onChange} 
                                            />
                                    </div>
                                <div className = "form-group"> 
                                        <label className="text-center">Prix par heure</label>
                                        <br/>

                                            <input type= "radio" 
                                            value = "Prix /hr"
                                            onChange= {this.onChange} 
                                            />
                                </div>
                                    </div>
                <br/>
                <div className = "form-group">
                    <label htmlFor = "pricerange" >Budget estimé:  </label>
                    <Select 
                    type= "text" className = "form-control" name= "pricerange" onChange= {inputChange('pricerange')} value = {values.pricerange}
                    options={options} />
                    {/* <input type= "text" className = "form-control" name= "pricerange" onChange= {inputChange('pricerange')} value = {values.pricerange} /> */}
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

export default FormPay
