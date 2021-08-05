import React from 'react';
import RFHeader from '../../components/RFHeader';
import DescriptionStrip from '../../components/DescriptionStrip';
import FilterAndGrid from '../../components/FilterAndGrid';
import './styles.css';
import {Filters, QandAs} from './utils';
import RFGridWrapper from '../../components/GridWrapper';
import RFQuestionAnswerAccordion from '../../components/QuestionAnswerAccordion';
import {UnorderedListOutlined, AppstoreOutlined} from '@ant-design/icons';
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
        <div className="viewControlStrip">
          <IconBlock>
            <UnorderedListOutlined />
          </IconBlock>
          <IconBlock>
            <AppstoreOutlined />
          </IconBlock>
        </div>
        <RFGridWrapper>
          {QandAs.map(qanda => (
            // <RFQuestionAnswerAccordion key={qanda.question} {...qanda} />
            <RFQuestionAnswerCard key={qanda.question} {...qanda}/>
          ))}
        </RFGridWrapper>
      </FilterAndGrid>
    </div>
  );
};

export default RFAskUs;

const IconBlock = ({children}) => {
  return <div className="iconBlock">{children}</div>;
};
