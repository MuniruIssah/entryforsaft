import React from 'react';
import './styles.css';
const RfAppCard = ({image, label}) => {
  return (
    <div className="rfAppCard">
      <div className="appLogo">
          <div className="logo" style={{backgroundImage:`url(${image})`}} ></div>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default RfAppCard;
