import React, { Component } from 'react';
import Select from 'react-select'

export class FormIntro extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        const options = [
            { value: 'peinture', label: 'Peinture' },
            { value: 'jardinage', label: 'Jardinage' },
            { value: 'plomberie', label: 'Plomberie' }
          ]

        return (
            <div className= "form-container">
                <h1 className="nb-5" >Pour poster une mission, veuillez remplir ce formulaire!</h1>
                <h3 className = "nb-5">Nos MinuteBricoleurs seront à votre disposition dès que vous postez votre mission.</h3>
                <br/>
                <div className = "form-group">
                    <label htmlFor = "title" >Titre de mission: </label>
                    <input type= "text" className = "form-control" name= "title" onChange= {inputChange('title')} value = {values.title} />
                </div>
                <br/>
                <div className = "form-group">
                    <label htmlFor = "description" >Descriptif de mission: </label>
                    <input type= "text" className = "form-control" name= "description" onChange= {inputChange('description')} value = {values.description} />
                </div>
                <br/>
                <div className = "form-group">
                    <label htmlFor = "category" >Compétences requises: </label>
                    <Select 
                    type= "text" className = "form-control" name= "category" onChange= {inputChange('category')} value = {values.category}
                    options={options} />
                    {/* <input type= "text" className = "form-control" name= "category" onChange= {inputChange('category')} value = {values.category} /> */}
                </div>

                <br/>

                <div className="text-center"> 
                    <button className= "btn btn-primary" onClick = {this.continue}>Page Suivante</button>
                </div>

            </div>
        )
    }
}

export default FormIntro
