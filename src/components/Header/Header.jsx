import React, { Component } from "react";
import Nav from "./Nav/Nav";
import { userContext } from "../../context/userContext";

class Header extends Component {
  static contextType = userContext;

  render() {
    return (
    <header>
      <Nav />
      {this.context.user ? <p>{this.context.user}</p>  : ""}
      {this.context.user ? <button onClick={this.context.logout}> Logout </button>  : ""}
    </header>
    )
  }
}

export default Header;
