import React, { Component } from 'react';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { 
            values: { title, description, category, address, zipcode, paymode, pricerange}
         } = this.props;

        return (
            <div className= "form-container">
                <h2 className="nb-5" >Confirmation de mission: </h2>
                <h3 className="nb-5">Vos données seront postées par la suite sur la plateforme.</h3>
                <br/>
                <ul class="list-group">
                    <li class="list-group-item">Titre: {title}</li>
                    <li class="list-group-item">Description: {description}</li>
                    <li class="list-group-item">Catégories: {category}</li>
                    <li class="list-group-item">Addresse: {address}</li>
                    <li class="list-group-item">Zip Code: {zipcode}</li>
                    <li class="list-group-item">Mode de paiment: {paymode}</li>

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
