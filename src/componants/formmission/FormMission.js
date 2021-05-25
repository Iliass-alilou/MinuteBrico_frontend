import React, { Component } from 'react';
import FormIntro from './FormIntro';
import FormCoord from './FormCoord';
import FormPay from './FormPay';
import Confirm from './Confirm';
import Success from './Success';

import './form.css';

export class FormMission extends Component {

    constructor() {
        super();
        this.state = {
            step: 1,
            title: '',
            description: '',
            category: '',
            address: '',
            zipcode: '',
            ville: '',
            date: '',
            erreurDescription: false
        };
    }
    table = [];
    nextStep = (input) => {
        const { step } = this.state;
        this.table.push(input);
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };


    inputChange = input => e => {
        console.log(e.target.value);
        this.setState({
            [input]: e.target.value
        })
        if (input == 'description') {
            if (this.state.description.length > 50) {
                this.setState({ erreurDescription: !this.state.erreurDescription })
            }
        }

    };

    handleChange = (newValue) => {

        this.setState({ category: newValue })
    };


    render() {

        const { step } = this.state;
        const { title, description, category, address, zipcode, ville, date } = this.state;
        const values = { title, description, category, address, zipcode, ville, date };

        for (let i = 0; i < this.table.length; i++) {
            console.log(this.table[i]);
        }


        switch (step) {
            case 1:
                return (
                    <FormIntro
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                        erreur={this.state.erreurDescription}
                        selectChange={this.handleChange}
                    />
                );
            case 2:
                return (
                    <FormCoord
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );

            case 3:
                return (
                    <FormPay
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );

                {/*case 4:
                return (
                    <Confirm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                );*/}
            case 4:
                return (
                    <Success values={values} />
                );
        }
    }
}

export default FormMission;
