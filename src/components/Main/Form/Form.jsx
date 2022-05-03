import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // State cuando se contruye el componente.
      redirect: false
    }
  }

  redirectOnSubmit = event => {
    event.preventDefault();

    // Cogemos los datos del formulario:
    const title = event.target.title.value;
    const abstract = event.target.abstract.value;
    const img = event.target.img.value;
    const topic = event.target.topic.value;

    // Variable a pasar a la función que nos llega por los props (add = newNew)
    const newNew = {title, abstract, img, topic}
    this.props.add(newNew)

    // Cambiamos el state redirect a true
    this.setState({ redirect: true })
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to='/list'/>;
    }

    return <form onSubmit={this.redirectOnSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="" />
      <label htmlFor="abstract">Abstract:</label>
      <input type="text" name="abstract" id="" />
      <label htmlFor="img">Photo Url:</label>
      <input type="url" name="img" id="" />
      <label htmlFor="topic">Topic:</label>
      <input type="text" name="topic" id="" />
      <input type="submit" value="Submit" />
    </form>
  }
}

export default Form;
