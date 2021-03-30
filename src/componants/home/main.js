import React, { Component } from 'react';
import {Link } from "react-router-dom"

export default class Main extends Component {
  render() {
    return (
      <div className='Main_Home'>
        <div className="banner">
          <img alt="..." src="/images/12.jpeg" className="imgBack"/>
          <div className="BannerFront">
            <Link to="/signup" className="DevBrico" >Devenir un MinuteBricoleur</Link>
            <Link to="/login" className="TrouvBrico" >Trouver un MinuteBricoleur</Link>
          </div>
        </div>
      </div>
    );
  }
}
