import React, { Component } from 'react'
import axios from "axios";

export class Success extends Component {
    async componentDidMount() {
        let { values } = this.props;
        values={...values,category:values.category.value}
        const response=await axios.post("http://localhost:8080/missions",values);
    }

    render() {
        return (
            <div>
                <h1 className="text-black">Votre mission est postée!</h1>
                <h3>Cliquez pour revenir à la page d'acceuil.</h3>
            </div>
        )
    }
}

export default Success
