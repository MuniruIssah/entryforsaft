import React,{useState} from 'react';
import './styles.css';
import {ArrowRightOutlined} from '@ant-design/icons';
const RFAppListItem = ({image, label, description}) => {
    
  return (
    <div className="rfAppListItem">
      <div
        className="listLogo"
        style={{backgroundImage: `url(${image})`}}></div>
      <div className="labelAndDescription">
        <span>{label}</span>
        <span className="desc">{description}</span>
      </div>
      <ArrowRightOutlined className="visitIcon" />
    </div>
  );
};

export default RFAppListItem;
