import React, { Component } from 'react'
import Signup from './signup';
import SignupIfBrico from './signupIfBrico';
import './style.css';

class FormSignup extends Component {
    state={

        step : 1,
        email : '',
        password : '',
        phone : ''
    }
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
        const { email, password, phone} = this.state;
        const values = { email, password, phone};

        switch (step){
            case 1:
                return(
                    <Signup
                        nextStep={this.nextStep}
                        inputChange = {this.inputChange}
                        values= {values}
                            />
                );
            case 2:
                return(
                    <SignupIfBrico
                        nextStep={this.nextStep}
                        inputChange = {this.inputChange}
                        values= {values}
                            />
                    );
        }
    }
}
export default FormSignup;