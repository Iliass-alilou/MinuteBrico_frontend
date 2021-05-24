import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom"
import axios from 'axios'


function Localisation() {

  return (
      <div className = "user">

          {/*fetch data from backend and feed with get and axios*/}
        <h3>Ville, Maroc </h3>
        <br/>
        //eslint-disable-next-line 
        <br/>
        <Link>Vers la carte</Link>
      </div>
  )
}

export default Localisation
