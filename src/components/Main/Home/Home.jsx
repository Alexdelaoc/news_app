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
      <h5> Inicia sesión </h5>
      <p>{this.context.user?`Has iniciado sesión como ${this.context.user}`:""}</p>
      <form onSubmit={this.login}>
        <input type="text" name="user" id="user" placeholder="Introduce tu nombre"/>
        <input type="submit" value="Enviar" />
      </form>
      
    </div>;
  }
}

export default Home