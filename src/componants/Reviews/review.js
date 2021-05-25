
import React ,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
import Swal from 'sweetalert2'
import './style.css'
import axios from 'axios'

const url ="http://localhost:3000/profile_brico_kaoutarDetails"  // on preciser une autre url apres (this is just)
const Review = () => {

    const [rating , setRating]=useState(null);
    const [hover , setHover]=useState(null);
    const [review, setReview]=useState('');   
    const [data , setData] = useState({});

   const SendReview = async () => {

       //console.log(rating +" "+review)
       //alert(`${rating} ${review}`)
       const comment = document.getElementById("textReview").value.length;     
       
       
       if( comment!==0 ){
         axios.get("http://localhost:8080/bricoleur/1")
        
        .then(res=>{
            
            const revwtab =[];
            const revw={
                userName_Client : "iliass Alilou",
                star : rating,
                comment : review
              }
              const array3 = revwtab.concat(res.data.reviewsOnBrico);
              revwtab.push(res.data.reviewsOnBrico)
              //alert(revwtab)
              array3.push(revw)
              //console.log(array3)
              //alert(revwtab)
            axios.put("http://localhost:8080/bricoleur/1" , {
               
                photo: res.data.photo,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                password: res.data.password,
                phone: res.data.phone,
                birthDate: res.data.birthDate,
                adresse: res.data.adresse,
                descriptionProfil: res.data.descriptionProfil,
                token: res.data.token,
                category: res.data.category,
                certifications: res.data.certifications,
                diplomes: res.data.diplomes,
                langues: res.data.langues,
                reviewsOnBrico: array3

            })  .then(Swal.fire({
                title: 'Merci',                
                text: 'votre avis a été bien enregistré',
                icon: 'success',
                button: 'Ok'
                
              }).then( okay => {
                  if (okay){
                    document.location.href=url
                  }
              }))
              .catch(err =>{
                alert(" error ",err);
                  })

              })
         .catch(err =>{
         console.log("still have error ",err);
         })
       }
       else{
          Swal.fire({
            title: 'Merci de donner un commentaire ',
            titleStyling: false,
            text: '',
            icon: 'error',
            button: 'Ok'          
          })
       }

    }
    return (
        <div className="review">
            {[...Array(5)].map((star , i)=>{

                const ratingValue = i+1
                
                return(
                    <label className="label">
                        {/* pour separer les etoils */}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                            id="star"
                            className="radio"
                            type="radio" 
                            name="rating" 
                            value ={ratingValue}
                            onClick={()=>setRating(ratingValue)}   
                            style={{paddingLeft:"20%"}}                      
                            hidden
                            />
                        <FaStar 
                              style={{}}
                              className="star"
                              size={50}
                              color={ratingValue <= (hover || rating) ? "#D1653E" : "#e4e5e9" } 
                              onMouseEnter={()=>setHover(ratingValue)}
                              onMouseLeave={()=>setHover(null)}
                              />
                    </label>         
                );
            })} 
            <br />
            <br />
            <br />
            
            <div>
                <form className="FormTextComment">
                    <textarea
                           
                            onChange={(e)=>setReview(e.target.value)}
                            type="textarea"
                            id="textReview"
                            name="commentReview"
                            rows="4" cols="50" 
                            placeholder="  Merci de donner votre avis à propos ce Bricoleur:
                                                                                              - comment il se communique?
                                                                                              - la qualite de son sevice?
                                                                                              - le respect du delai? etc.." 
                            
                            />                  
                   
                    <br/>
                    <br/>
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </form>
                <button  style={{width:"36%",backgroundColor:"#D4643C"}} onClick={SendReview}  type="submit" className="btn  mr-4 mb-4">Enregistrer</button>
            </div>  
        </div>
    )
}
export default Review;
