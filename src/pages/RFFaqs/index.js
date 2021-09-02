import React from 'react';
import DescriptionStrip from '../../components/DescriptionStrip';
import RFHeader from '../../components/RFHeader';
import RFFaqsAskUs from './components/AskPrompt';
import RFFaqCardGridWrapper from './components/CardGridWrapper';
import './styles.css';
import {faqs} from './utils';

const RFFaqs = () => {
  return (
    <div className="rfFaqs">
      <RFHeader title="FAQ's" />
      <DescriptionStrip
        title="Faq's"
        description="Frequently Asked Questions about Tariqa"
      />
      <RFFaqCardGridWrapper list={faqs} />
      <RFFaqsAskUs/>
    </div>
  );
};

export default RFFaqs;
