import React from 'react'
import './forms.css';
import FormEdit from './formEdit';
import Sidebar from "./Sidebar";
import './Sidebar.css';
import Nav from "../shared/nav";
import "../shared/style.css"
import Footer from "../shared/footer"


function ContainerEdit() {
    return (
        <div   style={{
            display:"flex",
            flexDirection:"column"

        }} >
       
        <Nav isAuth={document.location.href.includes("true")?true:false} data={document.location.href} />
        <div id="Container" className="mx-auto">
            <div style={{
                display:"flex",
                flexDirection:"column",
                fontSize:"20px",
                fontWeight:"700",
                position:"absolute",
                left:'100px',
                top:"200px",
                bottom:"0",
                zIndex:"20"
            }}> 
                <a style={{color: "#D1653E"}} >

profil 
                </a>

                <a href="/mdp" style={{color: "black"}} >
mot de passe 
                </a>
            
            </div>
            <div id="FormEdit">
                <FormEdit />
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default ContainerEdit;
