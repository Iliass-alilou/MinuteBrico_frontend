import React, { Component } from 'react';
import "./style.css"
import Nav from "../shared/nav"
import Footer from "../shared/footer"
import Main from "./main"

export default class Home extends Component {
  render() {
    return (
      <>
      <Nav />
      <Main />
      <Footer />
      </>
    );
  }
}
