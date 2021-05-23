import React from "react"
import {Link } from "react-router-dom"
import axios from 'axios'


function Langues() {
  return (
      <div className = "user">
        <h3>Langues: </h3>  
          {/*fetch data from backend and feed with get and axios*/}
        Arabe
        <br/>
        Francais
        <br/>
      </div>
  )
}

export default Langues
