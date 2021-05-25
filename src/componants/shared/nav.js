import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './style.css'
//<a href="/?auth=true&email=__ilyasalilou17@gmail.com__"><img alt="..." src="/assets/logo.png" className="logo" /></a>
export default class Nav extends Component {
  constructor(){
    super();
    this.state={
      pop:false
    }
  }
  viewPop=()=>{
    this.setState({pop: !this.state.pop})
  }
  render() {
    return (
      <div className="navbar">
        <img alt="..." src="/assets/logo.png" className="logo" />
        <ul className="center">
          <a href="#comments" ><li>Comment ça marche</li></a>
          <Link to="/missions" ><li>Missions</li></Link>
        </ul>
        {
          this.props.isAuth===false?(<ul className="auth">
          <Link to="/login" ><li className="seconnect">Se connecter</li></Link>
          <Link to="/signup" ><li className="signup">S'incrire</li></Link>
        </ul>):(<ul className="auth">
           <Link to="/switchToBricoleur" ><li className="devenirBtn">Devenir bricoleur</li></Link>
           <Link to="/createmissions" ><li className="creer_mission">Créer mission</li></Link>
           <li className='profile'><button onClick={this.viewPop} ><i class="fa fa-user-circle" aria-hidden="true"></i>

</button>
        
           </li>
          
        </ul>)
        
        }
           {this.state.pop &&  <ul class=" menu-overr main-menu menu">
           <Link to="/profile_brico_kaoutarDetails" ><li class=" item-over menu-item menu-item-has-children dropdown">Profile</li></Link>
           <Link to="/parametres" > <li class=" item-over menu-item menu-item-has-children dropdown">Parametres</li></Link>
           <Link to="/logout" > <li class=" item-over menu-item menu-item-has-children dropdown">Deconnexion</li></Link>
        
        </ul>
    }
      </div>
    );
  }
}
