import React, { Component } from 'react';
import "./style.css"
import Nav from "../shared/nav"
import Footer from "../shared/footer"
import Main from "./main"
import Cards from "../shared/Cards"
import Comment from '../Comment/Comment'



export default class Home extends Component {

  componentDidMount(){

  }
  render() {
    return (
      <>
      <Nav isAuth={document.location.href.includes("true")?true:false} data={document.location.href} />
      <Main />
      <div id="comments">
      <Comment />
      </div>
      <Cards />
      <Footer />
      </>
    );
  }
}
