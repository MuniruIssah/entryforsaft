import React from 'react';
import sheehu from '../../assets/sheehu.JPG';
import {FlagFilled} from '@ant-design/icons';
import './styles.css';
const RFNewsCard = ({
  image = sheehu,
  title = 'The National Mosque Opening',
}) => {
  return (
    <div className="rfNewsCard">
      <div className="rfNewsCardDate">17-09-2021</div>
      <div className="rfNewsCardInner">
        <div
          className="newsImage"
          style={{backgroundImage: `url(${image})`}}></div>
        <div className="sheikhDetails">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default RFNewsCard;
