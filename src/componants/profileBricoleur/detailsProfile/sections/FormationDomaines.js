import React from 'react'
import dataFormations from '../datas/Formations'
import dataDomaines from '../datas/Domaines'

import Formations from './Formations'
import Domaines from './Domaines'

function FormationDomaines() {
    return (
        <>
          <Formations datas = {dataFormations}/> 
          <Domaines datas = {dataDomaines}/> 
        </>
    )
}

export default FormationDomaines
