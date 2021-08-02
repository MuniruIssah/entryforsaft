import React from 'react';
import './styles.css';
const RFFilterButton = ({label,active}) => {
  return <button className={`rfFilterButton ${active?"active":""}`}>{label}</button>;
};

export default RFFilterButton;
