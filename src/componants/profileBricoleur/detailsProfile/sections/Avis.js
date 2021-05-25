import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import axios from "axios";

function Avis() {

    const [Comment, setComment] = useState("");
    const [Star, setStar] = useState("");
    const [Client, setClient] = useState("");

    const ReviewInformations = async () => {
        try {
          {/*const res = await axios.get("https://localhost:8080/bricoleur");*/}
          const res = await axios.get("http://localhost:8080/Review_on_Brico");
          setStar(res.data.star);
          setComment(res.data.comment);
          setClient(res.data.userName_Client);
          
        } catch {
            Swal.fire({
                title: 'Un probleme est survenue ',
                text: '',
                icon: 'error',
                button: 'Ok'          
              })
        }
      };
    
      useEffect(() => {
        ReviewInformations();
      }, []);
    
    
    return (
        <div className = "profil mb5">
            <h3><i class="fa fa-star" aria-hidden="true"></i>
   Avis</h3>
            <div>               
                <h5>
                    
                </h5>
                <p>
                Avis 1
                </p>
            </div>


            <p>
                    Avis 2
            </p>
            <p>
                    Avis 3
            </p>
        </div>
    )
}


export default Avis