import React from 'react';
import RFHeader from '../../components/RFHeader';
import DescriptionStrip from '../../components/DescriptionStrip';
import FilterAndGrid from '../../components/FilterAndGrid';
import './styles.css';
import {Filters, QandAs} from './utils';
import RFGridWrapper from '../../components/GridWrapper';
import RFQuestionAnswerCard from '../../components/QuestionAnswerCard';
const RFAskUs = () => {
  return (
    <div className="rfAskUs">
      <RFHeader title="RFAskUs" />
      <DescriptionStrip
        title="Ask Anything Tariqa"
        description="With Answers from renowned Sheikhs"
      />
      <FilterAndGrid filterList={Filters}>
        <RFGridWrapper>
          {QandAs.map(qanda => (
            <RFQuestionAnswerCard key={qanda.question} {...qanda} />
          ))}
        </RFGridWrapper>
      </FilterAndGrid>
    </div>
  );
};

export default RFAskUs;
