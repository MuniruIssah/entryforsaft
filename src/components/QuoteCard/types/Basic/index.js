import React from 'react';
import sheehu from '../../../../assets/sheehu.JPG';
import './styles.css';
const Basic = ({
    image = sheehu,
    author = 'Sheikh Tijaani',
    quote = 'Lorem ex minim elit mollit proident eu exercitation officia.',
  }) => {
  return (
    <div className="quoteCardBasic">
      <div
        className="sheikhImage"
        style={{backgroundImage: `url(${image})`}}></div>
      <p className="quoteMain">{quote}</p>
      <span className="author">{author}</span>
    </div>
  );
};

export default Basic;
