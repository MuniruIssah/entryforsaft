import React from 'react';
import sheehu from '../../assets/sheehu.JPG';
import { FlagFilled} from '@ant-design/icons'
import './styles.css';
const RFSheikhListItem = ({image = sheehu, name = 'Sheikh Ibrahim Inyass'}) => {
  return (
    <div className="rfSheikhListItem">
      <div
        className="sheikhImage"
        style={{backgroundImage: `url(${image})`}}></div>
      <div className="sheikhDetails">
        <span>{name}</span>
      </div>
      <div className="flag">
        <FlagFilled/>
      </div>
    </div>
  );
};

export default RFSheikhListItem;
