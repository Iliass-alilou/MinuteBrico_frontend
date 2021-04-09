import React, { Component } from 'react';
import FormIntro from './FormIntro';
import FormCoord from './FormCoord';
import FormPay from './FormPay';
import Confirm from './Confirm';
import Success from './Success';

import './form.css';

export class FormMission extends Component {

    state = {
        step: 1,
        title: '', 
        description: '', 
        category: '', 
        address: '', 
        zipcode: '', 
        paymode: '', 
        pricerange: ''         
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({step : step +  1});
    };
    prevStep = () => {
        const {step} = this.state;
        this.setState({step : step - 1});
    };


    inputChange = input => e => {
        this.setState({
            [input]: e.target.value 
        })
    };


    render() {

        const { step } = this.state;
        const { title, description, category, address, zipcode, paymode, pricerange} = this.state;
        const values = { title, description, category, address, zipcode, paymode, pricerange};


        switch (step){
            case 1:
                return(
                    <FormIntro 
                    nextStep={this.nextStep}
                    inputChange = {this.inputChange}
                    values= {values}
                        />
                );
            case 2: 
                return (
                    <FormCoord 
                    prevStep = {this.prevStep}
                    nextStep={this.nextStep}
                    inputChange = {this.inputChange}
                    values= {values}
                        />
                );

            case 3: 
                return (
                    <FormPay 
                    prevStep = {this.prevStep}
                    nextStep={this.nextStep}
                    inputChange = {this.inputChange}
                    values= {values}
                        />
                );

            case 4: 
                return (
                    <Confirm 
                    prevStep = {this.prevStep}
                    nextStep={this.nextStep}
                    values= {values}
                        />
                );
            case 5: 
                    return(
                        <Success/>
                 );
        }
    }
}

export default FormMission;
