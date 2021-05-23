import React , {useState} from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
import './forms.css';

function DropDownListCheckBoxLanguages(props) {
    const data=[
        {langues:"Anglais" , id:1},
        {langues:"Arabe" , id:2},
        {langues:"Francais" , id:3},     
    ]

    const onSelect= (selectedList, selectedItem) => {
      //  setCategory(selectedItem);
       //console.log(selectedList)
       document.getElementById("langueSelected").value= document.getElementById("langueSelected").value+'_'+selectedItem.langues;
       //alert(" selected "+selectedList);
       const catList=[];
       for(var i=0;i<selectedList.length;i++){
             const cat={
                 name:selectedList[i].langues
             }
             catList.push(cat);
       }
     props.setLangue(catList);
     //props.inputChange(catList);
    }
    
    const onRemove=(selectedList, removedItem)=> {
        //console.log(selectedList)
        document.getElementById("langueSelected").value= document.getElementById("langueSelected").value.replace('_'+removedItem.langues,'');
    }
    const [selectedValue,setSelectedValue]=useState([]);
    
  

    const[options]=useState(data);
    return (  
           <div >
                <label className="form-label" htmlFor="form5Example1">Langues <span style={{color:'red'}}>*</span> </label>
                <Multiselect options= {options} selectedValues={selectedValue}
                             onSelect={onSelect} 
                             onRemove={onRemove} 
                             showCheckbox={true}
                             displayValue="langues"  />
                <input type="texte" id="langueSelected" hidden/>
           </div>   
    );
}
export default DropDownListCheckBoxLanguages;