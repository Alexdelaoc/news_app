import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../context/userContext";

class Nav extends Component {
  static contextType = userContext;

  render() {
    return <nav className="nav">
      <Link to="/home"> Home </Link>
      <Link to="/form"> Form </Link>
      <Link to="/list"> List </Link>
      
    </nav>;
  }
}

export default Nav;
