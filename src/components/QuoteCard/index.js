import React, {useState} from 'react';
import './styles.css';
import Alternate from './types/Alternate';
import Basic from './types/Basic';
const RFQuoteCard = props => {
  const [type, setType] = useState('basic');
  return (
    <div className="rfQuoteCard">
      <QuoteControls type={type} onClick={setType} />
      {type === 'basic' ? <Basic {...props} /> : <Alternate {...props} />}
    </div>
  );
};

export default RFQuoteCard;

const QuoteControls = ({type, onClick}) => {
  const handleTypeChange = type => onClick(type);
  return (
    <div className="quoteControls">
      <button
        className={type === 'basic' ? 'active' : ''}
        onClick={() => handleTypeChange('basic')}>
        Basic
      </button>
      <button
        className={type === 'alternate' ? 'active' : ''}
        onClick={() => handleTypeChange('alternate')}>
        Alternate
      </button>
    </div>
  );
};
