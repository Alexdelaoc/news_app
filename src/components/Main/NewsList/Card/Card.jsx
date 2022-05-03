import React, { Component } from "react";
import no_image from '../../../../assets/no_image.jpg';

class Card extends Component {

  render() {
    const news = this.props.data;

    let title = '';
    news.title
      ? title = news.title
      : title = news.headline.main;

    let subtitle = '';
    news.subtitle
      ? subtitle = news.subtitle
      : subtitle = news.abstract;

    let imgSrc = '';
    if (news.imgSrc) {
      imgSrc = news.imgSrc;
    } else if (news.multimedia && news.multimedia.length > 0) {
      imgSrc = `https://www.nytimes.com/${news.multimedia[0].url}`;
    } else {
      imgSrc = no_image;
    }

    return (
    <div>
      Title: {title} Sub: {subtitle}
      <img src={imgSrc} alt="news" />
    </div>
    )
  }
}

export default Card;
