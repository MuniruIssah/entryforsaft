import React from 'react';
import "./styles.css";

const RFFaqCard = ({question, answer, urgency}) => {
  return (
    <details className={`accordionCard `}>
      <summary>
        <span>{question}</span>
        <div className="accordionIcon" ></div>
      </summary>
      <div className="accordionAnswer">{answer}</div>
    </details>
  );
};

export default RFFaqCard;
