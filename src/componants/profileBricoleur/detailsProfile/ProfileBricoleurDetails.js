import React from 'react'

import './ProfileBricoleurDetails.css';
import Localisation from './sections/Localisation';
import User from './sections/User';
import Profil from './sections/Profil'
import Langues from './sections/Langues';
import FormationDomaines from './sections/FormationDomaines';
import Avis from './sections/Avis';

 {/* TO DO  */}
        {/* Variables CSS */}
        {/* Colonne de gauche * /} 
                {/* Détails personnels - User */}
                {/* Compétences - skills */}
                {/* Formation  - education */}
                {/* Langues - skills */}
        {/* Colonne de droite * /} 
                {/* Profil - profil */}
                {/* Export PDF (react-html2pdf)  If u can */}


 function ProfileBricoleurDetails() {
    return (
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
            <User />
            <Localisation/>
            <Langues/>
          </div>
          <div className="main">
            <Profil />
            <FormationDomaines/>
            <Avis/>
          </div>
        </div>
      </div>
    )
}

export default ProfileBricoleurDetails;
