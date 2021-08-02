import React from 'react';
import './styles.css';
import { ArrowRightOutlined } from '@ant-design/icons'
const RFAppListItem = ({image, label}) => {
  return (
    <div className="rfAppListItem">
      <div
        className="listLogo"
        style={{backgroundImage: `url(${image})`}}></div>
      <span>{label}</span>
      <ArrowRightOutlined className="visitIcon"/>
    </div>
  );
};

export default RFAppListItem;
