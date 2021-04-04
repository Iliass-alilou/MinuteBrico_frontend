import React from 'react';

const MissionItems= (props)=>{
   
 const Missions= props.data.map((item)=>{
    console.log("hello"+ item.id);
       return(
     
           <div  key={item.id} className="container mt-5" >
              <div className="card  text-white " style={{color:"white" , borderRadius:"65px",border:"solid 1px #91091E" }}>  
              <div className="card-img d-flex justify-content-center" >
                    <div id="carouselExampleSlidesOnly"  className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-inner ">
                                <div className="carousel-item active">
                                <img style={{height:"200px",width:"600px"}} src={item.image}/>
                                </div>
                                <div className="carousel-item">
                                <img style={{height:"200px",width:"auto"}} src="images/logo.png"/>
                                </div>
                                <div className="carousel-item">
                                <img style={{height:"200px",width:"auto"}} src={item.image}/>
                                </div>
                       </div>
                 </div>
                 </div>
                        <div className="card-img-overlay">
                            <div style={{border:"1px solid #91091E",borderRaius:"20px",opacity: "0.5" ,background:"#91091E"}}>
                            <h3 className="card-title " style={{color:"#D1653E",fontFamily:"'Lato', sans-serif",marginRight:"300px"}}>{item.domaine}</h3>
                            <p className="card-text" style={{fontFamily:"'Lato', sans-serif",marginRight:"300px"}}>{item.description}</p>
                            </div>
                           <button className="btn btn-outline-dark mt-5"style={{marginLeft:"350px"}} >Demander</button>
                        </div>
             </div>

           </div>
      
       )
    });

    return(        <div>
                    {Missions}
                    </div>
               );

}
 export default MissionItems;