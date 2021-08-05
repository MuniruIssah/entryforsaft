import React from 'react';
import sheehu from '../../assets/sheehu.JPG';
import {FlagFilled} from '@ant-design/icons';
import './styles.css';
const RFSheikhCard = ({image = sheehu, name = 'Sheikh Ibrahim Inyass'}) => {
  return (
    <div className="rfSheikhCard">
      <div
        className="sheikhImage"
        style={{backgroundImage: `url(${image})`}}></div>
      <div className="flag">
        <FlagFilled />
      </div>
      <div className="sheikhDetails">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default RFSheikhCard;
