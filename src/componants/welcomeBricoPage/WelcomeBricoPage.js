
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Review from '../Reviews/review'
import './style.css'


 class WelcomeBricoPage extends Component {
    
    btn = document.getElementById("myBtn");
    span = document.getElementsByClassName("close")[0];

      
    clickBtn = ()=>{
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
    }
    clickSpan =()=>{
      const modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
    

    render() {
        return (
            <div id="#Modal" className="brico_Profile">
                <p style={{color:'red', fontSize:'100px', textAlign:'center',}}>your profile page </p> 
                          
                <button onClick={this.clickBtn} id="myBtn"  > laissez un avis pour ce briceleur </button>

                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={this.clickSpan} className="close"> &times;</span>
                        <br/>
                        <h4 className="reviewTitl">&nbsp;&nbsp;&nbsp;Comment évalueriez-vous ce Bricoleur?</h4>
                        <p></p>
                        <p></p>
                        <p></p>
                        <Review id="ReviewInModal" />
                    </div>
                </div>

                
            </div>
        )
    }
}
export default WelcomeBricoPage;
