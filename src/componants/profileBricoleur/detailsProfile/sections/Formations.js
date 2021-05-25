import React, { useState, useEffect } from "react";
import axios from "axios";


function Formation({datas}) {
  const [diplome, setDiplome] = useState("");
  

  const profileData = async () => {
    try {
      
      const res = await axios.get("http://localhost:8080/bricoleur/3");
      setDiplome(res.data.diplomes);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);


  const lesDiplomes= (diplomes)=>{
    let array = []
    for(var i=0;i<diplomes.length;i++){
      array.push(
        <div className="grid__row">
          <div className="grid__item">
              <span className="grid__date"> {diplomes[i].annee_entre} </span> &nbsp;&nbsp; <span className="grid__date"> {diplomes[i].annee_sortie} </span>
          </div>
          <div className="grid__item">
              <h4 className="grid__title">{diplomes[i].school}</h4>
              <p className="grid__location">{diplomes[i].diplome}</p>
          </div>
        </div>
      )
     
    }
    return(
      array
    );
  }
  
    return (
        <div className="cursus mb3">
          <h3> <i class="fa fa-university" aria-hidden="true"></i>
  Formations</h3>
          {lesDiplomes(diplome)}
        </div>
    )
}


export default Formation