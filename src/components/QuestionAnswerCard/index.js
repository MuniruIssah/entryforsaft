import React from 'react';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import './styles.css';
const RFQuestionAnswerCard = ({question, answer, urgency, withVotes}) => {
  return (
    <div>
      <details className={`qAndACard ${urgency.length > 0 ? urgency : 'none'}`}>
        <summary>
          <span>{question}</span>
          <div className="qAndAIcon"></div>
        </summary>
        <div className="qAndAAnswer">{answer}</div>
      </details>
      {withVotes && (
        <div className="voteStrip">
          <button className="vsIcon">
            <ArrowUpOutlined />
            <span>Upvote</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default RFQuestionAnswerCard;
