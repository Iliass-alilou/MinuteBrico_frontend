import React, { Component } from 'react'
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';

import './forms.css'

class FormSwitchBrico extends Component {

    state = {
        step : 1,
        photo : '',
        firstName  : '',
        lastName : '',
        displayName : '' ,
        email : '',
        password: '',
        phone : '',
        birthDate : '',
        adresse : '',
        category :[],
        certifications :[],
        diplomes :[],
        langues :[]
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
        const { photo, firstName, lastName, email, password, phone, birthDate,adresse,category,certifications,diplomes,langues} = this.state;
        const values = { photo, firstName, lastName, email, password, phone, birthDate,adresse,category,certifications,diplomes,langues};
        
        

        switch (step){
            case 1:
                return(
                    <Form1
                    nextStep={this.nextStep}
                    prevStep = {this.prevStep}
                    inputChange = {this.inputChange}
                    values= {values}
                    />
                );
            case 2: 
                return (
                    <Form2
                    prevStep = {this.prevStep}
                    nextStep={this.nextStep}
                    inputChange = {this.inputChange}
                    values= {values}
                        />
                );
                case 2: 
                return (
                    <Form3
                    prevStep = {this.prevStep}
                    nextStep={this.nextStep}
                    inputChange = {this.inputChange}
                    values= {values}
                        />
                );
                
        }
    }
}
export default FormSwitchBrico;