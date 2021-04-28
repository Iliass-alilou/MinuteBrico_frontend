import React , {useState} from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
import './forms.css'

function DropDownListCheckBox() {
    const data=[
        {category:"Bricolage de la maison" , id:1},
        {category:"Peinture" , id:2},
        {category:"Jardinage" , id:3},
        {category:"Électricité" , id:4},
        {category:"Plomberie" , id:5},
        {category:"Électroménager" , id:6},
        {category:"Déménagement" , id:7},
        {category:"Montage de meubles" , id:8}
        
    ]
    const[options]=useState(data);
    return (  
           <div >
                <label className="form-label" htmlFor="form5Example1">Catégories <span style={{color:'red'}}>*</span> </label>
                <Multiselect options={options} displayValue="category" />
           </div>   
    );
}
export default DropDownListCheckBox;