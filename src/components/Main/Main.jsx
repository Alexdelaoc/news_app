import React, { Component } from "react";
import Form from "./Form/Form";
import NewsList from "./NewsList/NewsList";
import Home from "./Home/Home";

import { Route, Routes } from "react-router-dom"; 

class Main extends Component {
  render() {
    return (
    <main>
      <h1> Welcome to my News App!</h1>
      <h3> A React exercise for The Bridge School </h3>
      <h4> With help from: </h4>
      <img src="https://developers.nytimes.com/static/NYTDevLogo.svg" alt="NY Times API logo" />

      <Routes>
        <Route element={<Home/>} path='/home'/>
        <Route element={<Form/>} path='/form'/>
        <Route element={<NewsList/>} path='/list'/>
      </Routes>
      
    </main>
    )
  }
}

export default Main;
