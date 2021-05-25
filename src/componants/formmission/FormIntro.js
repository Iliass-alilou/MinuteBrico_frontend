import React, { Component } from 'react';
import Select from 'react-select'

export class FormIntro extends Component {

    continue = (input) => {
        this.props.nextStep(input);
    };

    render() {
        const { values, inputChange,erreur,selectChange } = this.props;
        const options = [
            { value: 'peinture', label: 'Peinture' },
            { value: 'jardinage', label: 'Jardinage' },
            { value: 'plomberie', label: 'Plomberie' }
        ]
        

        return (
            <div className="form-container">
                <h1 className="nb-5" >Pour poster une mission, veuillez remplir ce formulaire!</h1>
                <h3 className="nb-5">Nos MinuteBricoleurs seront à votre disposition dès que vous postez votre mission.</h3>
                <br />
                <div className="form-group">
                    <label htmlFor="title" >Titre de mission: </label>
                    <input required type="text" className="form-control" name="title" onChange={inputChange('title')} value={values.title} />
                </div>
                <br />
                
                <div className="form-group">
                    <label htmlFor="description" >Descriptif de mission: </label>
                    <textarea required type="text" className="form-control" name="description" onChange={inputChange('description')} value={values.description} />
                </div>
                {erreur && <div className="alert alert-danger" role="alert">
                    Erreur length
                </div>}
                <br />
                <div className="form-group">
                    <label htmlFor="category" >Compétences requises: </label>
                    <Select
                        type="text" className="form-control" name="category" onChange={selectChange} value={values.category}
                        options={options} />
                    {/* <input type= "text" className = "form-control" name= "category" onChange= {inputChange('category')} value = {values.category} /> */}
                </div>

                <br />

                <div className="text-center">
                    <button disabled={erreur==true || values.description.length <= 0 || values.category=='' } className="btn btn-primary" onClick={() => this.continue(values)}>Page Suivante</button>
                </div>

            </div>
        )
    }
}

export default FormIntro
