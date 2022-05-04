import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../context/userContext";

class Nav extends Component {
  static contextType = userContext;

  render() {
    return <nav className="nav">
      <Link to="/home" className="nav__element"> Home </Link>
      <Link to="/form" className="nav__element"> Form </Link>
      <Link to="/list" className="nav__element"> List </Link>
      
    </nav>;
  }
}

export default Nav;
