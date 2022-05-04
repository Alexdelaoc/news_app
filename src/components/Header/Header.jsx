import React, { Component } from "react";
import Nav from "./Nav/Nav";
import { Button } from "@mui/material";
import { userContext } from "../../context/userContext";

class Header extends Component {
  static contextType = userContext;

  render() {
    return (
    <header className="header">
      <Nav />
      { this.context.user ?
        <div className="header__user">
          <p>{this.context.user}</p>
          <Button variant="contained" color="success" onClick={this.context.logout}> Logout </Button>
        </div>
      : "" }
    </header>
    )
  }
}

export default Header;
