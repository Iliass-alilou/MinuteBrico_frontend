import React, { Component } from 'react';
import Select from 'react-select'


export class FormPay extends Component {

    continue = (input) => {
        this.props.nextStep(input);
    };

    back = e => {
        this.props.prevStep();
    };

    onChange = ee => {
        this.setState({ value: ee.target });
    }


    render() {
        const { values, inputChange } = this.props;



        return (
            <div className="form-container">
                <h2 className="nb-5" >Comment voulez vous payer votre MinuteBricoleur? </h2>
                <br />


                <div className="birthDate mb-4">
                    <label className="form-label" htmlFor="form5Example1">Une estimation de votre mission: <span style={{ color: 'red' }}>*</span></label>
                    <input type="date" className="form-control" id="birthDate" name="birthDate1" onChange={inputChange('date')} value={values.date} required />
                </div>

<br/>
                <div className="row">
                    <div className="col-6">
                        <div className="text-center">
                            <button className="btn btn-secondary" onClick={this.back}>Page précédente</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={() => this.continue(values)}>Page Suivante</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FormPay
