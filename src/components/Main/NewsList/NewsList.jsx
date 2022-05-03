import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card/Card";

const apiKey = process.env.REACT_APP_API_KEY

class NewsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newsList: []
    }
  }

  async componentDidMount(){
    try {
      const resp = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`);
      const fiveNews = await resp.data.response.docs.slice(0,5);

      this.setState({ newsList: fiveNews });

    } catch (err) {
      console.log(err);
    }
  }

  renderNews = () => {
    return this.state.newsList.map((aNew) => {
      let id = uuidv4();
      return <Card data={aNew} key={id} />
    });
  }
  
  render() {
    return (
    <div>
      <p>Aquí tienes 5 noticias</p>
      {this.renderNews()}
    </div>
    )
  }
}

export default NewsList;
