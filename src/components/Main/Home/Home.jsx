import React, { Component } from "react";
import { userContext } from "../../../context/userContext";

class Home extends Component {
  static contextType = userContext; // Consume el contexto de userContext

  constructor(props) {
    super(props)
  
    this.state = {
       user:""
    }
  }

  login = (event) => {
    event.preventDefault();
    const user = event.target.user.value;
    this.context.login(user);
  }

  render() {
    return <div>
      <h5> Log in </h5>
      <p>{this.context.user?`You've logged in as ${this.context.user}`:""}</p>
      <form onSubmit={this.login}>
        <input type="text" name="user" id="user" placeholder="Name"/>
        <input type="submit" value="Login" />
      </form>
      
    </div>;
  }
}

export default Home