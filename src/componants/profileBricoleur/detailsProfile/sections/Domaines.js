import React, { useState, useEffect } from "react";
import axios from "axios";

function Domaines({datas}) {  

  const [certification, setCertification] = useState("");

  const profileData = async () => {
    try {
      
      const res = await axios.get("http://localhost:8080/bricoleur/3");
      setCertification(res.data.certifications);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []); 

  const lesCertifications= (certifications)=>{
    let array = []
    for(var i=0;i<certifications.length;i++){
      array.push(
        <div className="grid__row">
          <div className="grid__item">
              <span className="grid__date"> {certifications[i].date_obtention} </span> &nbsp;&nbsp; <span className="grid__date"> {certifications[i].date_expiration} </span>
          </div>
          <div className="grid__item">
              <h4 className="grid__title">{certifications[i].name_centre}</h4>
              <p className="grid__location">{certifications[i].name_certification}</p>
          </div>
      </div>
      )
     
    }
    return(
      array
    );
  }

    return (
      <div className="cursus">
        <h3>Certifications experiences</h3>
        {lesCertifications(certification)}
      </div>
    )
}


export default Domaines