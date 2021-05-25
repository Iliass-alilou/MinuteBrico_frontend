import React, { Component } from 'react';

export class Confirm extends Component {

    continue = e => {
        this.props.nextStep();
    };

    back = e => {
        this.props.prevStep();
    };

    render() {
        const { 
            values: { title, description, category, address, zipcode, ville, date}
         } = this.props;

        return (
            <div className= "form-container">
                <h2 className="nb-5" >Confirmation de mission: </h2>
                <h3 className="nb-5">Vos données seront postées par la suite sur la plateforme.</h3>
                <br/>
                <ul class="list-group">
                    <li class="list-group-item">Titre: {title}</li>
                    <li class="list-group-item">Description: {description}</li>
                    <li class="list-group-item">Catégorie: {category}</li>
                    <li class="list-group-item">Addresse: {address}</li>
                    <li class="list-group-item">Zip Code: {zipcode}</li>
                    <li class="list-group-item">Ville: {ville}</li>
                    <li className="list-group-item">Date: {date}</li>

                </ul>
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

export default Confirm 
