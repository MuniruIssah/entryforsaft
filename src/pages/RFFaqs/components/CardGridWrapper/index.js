import React from 'react';
import RFFaqCard from '../FaqCard';
import "./styles.css"
const RFFaqCardGridWrapper = ({list}) => {
  return (
    <div className="rfFaqCardGridWrapper">
      {list.map(item => (
        <RFFaqCard key={item.question} {...item} />
      ))}
    </div>
  );
};

export default RFFaqCardGridWrapper;
