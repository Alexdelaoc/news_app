import React, { Component } from "react";
import Welcome from "./Welcome";
import Home from "./Home/Home";
import Form from "./Form/Form";
import NewsList from "./NewsList/NewsList";

import { Route, Routes } from "react-router-dom"; 

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
       newsList: []
    }
  }
  render() {
    return (
    <main>
      <Routes>
        <Route element={<Welcome/>} path='/'/>
        <Route element={<Home/>} path='/home'/>
        <Route element={<Form/>} path='/form'/>
        <Route element={<NewsList data={this.state.newsList}/>} path='/list'/>
      </Routes>

    </main>
    )
  }
}

export default Main;
