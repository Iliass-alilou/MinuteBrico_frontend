import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom"
import axios from 'axios'


function Langues() {
  const [langue , setLangue] = useState("");
  const profileData = async () => {
    try {
      
      const res = await axios.get("http://localhost:8080/bricoleur/3");
      setLangue(res.data.langues);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

    const leslangues= (langues)=>{
      let array = []
      for(var i=0;i<langues.length;i++){
        array.push(
          <p>
            {langues[i].name_language}
        </p>
        )
      }
      return(
        array
      );
    }
  return (
      <div className = "user">
        <h2>Langues: </h2>  
        {
           <div>
             {leslangues(langue)}
           </div>
         
        }
        
        <br/>
        
        <br/>
      </div>
  )
}

export default Langues
