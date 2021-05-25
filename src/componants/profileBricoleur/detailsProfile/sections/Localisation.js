import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom"
import axios from 'axios'


function Localisation() {

  return (
      <div className = "user">

          {/*fetch data from backend and feed with get and axios*/}
        <h2> <i class="fa fa-location-arrow" aria-hidden="true"></i> 
   Ville, Maroc </h2>
        <br/>
        //eslint-disable-next-line 
        <br/>
        <Link>Vers la carte</Link>
      </div>
  )
}

export default Localisation
