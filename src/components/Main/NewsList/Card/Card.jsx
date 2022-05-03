import React, { Component } from "react";
import no_image from '../../../../assets/no_image.jpg';

class Card extends Component {

  render() {
    const news = this.props.data;

    // Definimos una variable vacía al principio de cada uno de los campos que compondrán la tarjeta, y la rellenamos en función de dónde nos lleguen los datos, desde el formulario o desde la petición HTTP.
    
    // Title
    let title = ''; 
    news.title
      ? title = news.title
      : title = news.headline.main;
      
    // Abstract
    let abstract = '';
    if(news.abstract) {
      abstract = news.abstract
    }

    // Img
    let img = '';
    if (news.img) { // Si se guarda la imagen del formulario en this.props.data
      img = news.img;
    } else if (news.multimedia && news.multimedia.length > 0) {
      img = `https://www.nytimes.com/${news.multimedia[0].url}`;
    } else {
      img = no_image; // Si no hay imagen ni en formulario ni en la petición http, se muestra una imagen guardada en los assets.
    }

    // Topic
    let topic = '';
    news.topic
      ? topic = news.topic // topic del formulario
      : topic = news.news_desk;

    return (
    <div>
      Title: {title} Abstract: {abstract}
      <img src={img} alt="news" />
      Topic: {topic}
    </div>
    )
  }
}

export default Card;
