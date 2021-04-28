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

    const onSelect= (selectedList, selectedItem) => {
       //console.log(selectedList)
       document.getElementById("categorySelected").value= document.getElementById("categorySelected").value+'_'+selectedItem.category;
        //console.log(document.getElementById("categorySelected").value);
    }
    
    const onRemove=(selectedList, removedItem)=> {
        //console.log(selectedList)
        document.getElementById("categorySelected").value= document.getElementById("categorySelected").value.replace('_'+removedItem.category,'');
        //console.log(document.getElementById("categorySelected").value);
    }
    const [selectedValue,setSelectedValue]=useState([]);
    
  

    const[options]=useState(data);
    return (  
           <div >
                <label className="form-label" htmlFor="form5Example1">Catégories <span style={{color:'red'}}>*</span> </label>
                <Multiselect options= {options} selectedValues={selectedValue}
                             onSelect={onSelect} 
                             onRemove={onRemove} 
                             displayValue="category"  />
                <input type="texte" id="categorySelected" hidden/>
           </div>   
    );
}
export default DropDownListCheckBox;