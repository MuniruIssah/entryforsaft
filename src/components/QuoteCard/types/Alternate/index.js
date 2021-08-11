import React from 'react';
import './styles.css';
const Alternate = ({author, quote, image}) => {
  return (
    <div className="quoteCardAlternate" style={{backgroundImage:`url(${image})`}}>
      <p className="quoteMain">{quote}</p>
      <span className="author">{author}</span>
    </div>
  );
};

export default Alternate;
