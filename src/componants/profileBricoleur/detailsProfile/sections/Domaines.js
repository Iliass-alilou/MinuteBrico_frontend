import React, { useState, useEffect } from "react";
import axios from "axios";

function Domaines({datas}) {  

  const [certification, setCertification] = useState("");

  const profileData = async () => {
    try {
      
      const res = await axios.get("http://localhost:8080/bricoleur/1");
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
<<<<<<< HEAD
        <h3>Certifications experiences</h3>
        {lesCertifications(certification)}
=======
        <h3><i class="fa fa-graduation-cap" aria-hidden="true"></i>
 Domaines professionels</h3>
        {datas.map(item => (
          <div className="grid__row" key={item.id}>
            <div className="grid__item">
              <h4 className="grid__mission">{item.title}</h4>
            </div>
            <div className="grid__item">
              <p className="grid__location">{item.location}</p>
              <p className="grid__text">{item.text}</p>
              <ul className="grid__missions">
                {item.missions.map(mission => (
                  <li className="grid__mission" key={mission.id}>
                  {mission.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
>>>>>>> 8afa47e5af71b1ba744575df40cc8c1845a0a647
      </div>
    )
}


export default Domaines