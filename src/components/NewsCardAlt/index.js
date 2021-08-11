import React from 'react';
import sheehu from '../../assets/sheehu.JPG';
import './styles.css';
const RFNewsCardAlt = ({
  image = sheehu,
  title = 'The National Mosque Opening',
  description="Lorem ex minim elit mollit proident eu exercitation officia irure veniam aute dolore excepteur."
}) => {
  return (
    <div className="rfNewsCardAlt">
      <div className="rfNewsCardAltDate">17-09-2021</div>
      <div className="rfNewsCardAltInner">
        <div
          className="newsImage"
          style={{backgroundImage: `url(${image})`}}></div>
        <div className="sheikhDetails">
          <span>{title}</span>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default RFNewsCardAlt;
