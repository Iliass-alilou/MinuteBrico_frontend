import React from 'react'
import useSWR from 'swr'

import MissionItems from './CarteMissionComponent';
import './mission.css';
const Mission = ()=>{
  const[categorie,setCategorie]=React.useState('Tout');
  const[radioBoutton,setradioBoutton]=React.useState(2);

  function radioHandler(event){

      setradioBoutton(1);
      console.log("from realisée  "+radioBoutton);

  }
  function radioHandlerNon(event){

      setradioBoutton(0);
      console.log("from NON realisée  "+radioBoutton);
  
  }
  function handelCategorie(event){

    setCategorie(event.target.value);
      console.log("catégorie :  " + categorie);
    
  }
  function radioHandlerTout(){
    setradioBoutton(2);
    console.log("from All  "+radioBoutton +"categorie  "+categorie);
    
  }



const fetcher = (url) => fetch(url).then(res =>{return res.json()} )
 const { data, error } = useSWR('http://localhost:8080/missions', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) {return (
    <div style={{position:"absolute",left:"45%",top:"45%" }}>      
                <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>  
  </div>);}

console.log(data[0]);
//alert(data);


    return(
      <div  id="mission">
        
       <div className="container mt-5" >
         <div id="head" className="row">
               
            <div className="col-6"> 
              <a  href="/" className="py-2 navbar-link"> <img className="Brand " src="images/logo.png" style={{height:"130px",width:"150px",position:"absolute",top:"0px"}} /></a>   
            </div> 
             
             <div className="col-6  px-1 form-floating" >
                 <select className="form-select" onChange={(event)=>handelCategorie(event)} style={{borderRadius:"22px"}} id="floatingSelect" aria-label="Floating label select example">
                 <option value="Tout">Tout</option>
                   <option value="Menuiserie">Menuiserie</option>
                   <option value="voiture">voiture</option>
                </select>
                 <label for="floatingSelect">Filtrer Par Catégorie</label>
             </div>
         </div>
           <div className="mt-3" style={{borderTop:"solid 1px #D1653E"}}/>
           <div className="row">
          <div id="box" className="col-md-10 mt-5 mx-5"style={{ borderRadius:"62px",width:"950px",height:"450px",backgroundColor:"rgba(1,0,0,0)",paddingRight:"2px" ,zIndex:"0"}} > 
             
           <MissionItems data={data.filter((x)=>((x.domaine==categorie && x.etatMission==radioBoutton) ||(x.etatMission==radioBoutton && categorie=="Tout")||(x.domaine==categorie && radioBoutton==2 )||(radioBoutton==2 && categorie=="Tout" )))} />

         </div>
         <div className="col-md-auto mt-5 mx-3" style={{paddingTop:"80px"}}>
               <div className="form-check">
                 <input className="form-check-input"  onClick={()=>radioHandlerTout()} type="radio" name="tout" />
                  <label className="form-chekck-label" for="tout">Tout</label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" onClick={(event)=>radioHandler(event)} type="radio" name="realisee"/>
                  <label className="form-chekck-label" for="realisee">Réalisée</label>       
              </div>
              <div className="form-check">
                 <input className="form-check-input"  onClick={(event)=>radioHandlerNon(event)} type="radio" name="nonrealisee"/>
                  <label className="form-chekck-label" for="nonrealisee">Non Réalisée</label>
              </div>
         </div>
         </div>
   
        </div>
        </div>
    );
}
export default Mission;