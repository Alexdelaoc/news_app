import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

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

    return (
    <div className="center">
      <h3>Insert some film data!</h3>
      <form onSubmit={this.redirectOnSubmit} className="form">
        <TextField id="outlined" label="Title" variant="outlined" name="title"/>
        <TextField id="outlined" label="Abstract" variant="outlined" name="abstract"/>
        <TextField id="outlined" label="Image URL" variant="outlined" name="img"/>
        <TextField id="outlined" label="Topic" variant="outlined" name="topic"/>
        <Button variant="outlined" type="submit">Submit</Button>
      </form>
    </div>
    )
  }
}

export default Form;
