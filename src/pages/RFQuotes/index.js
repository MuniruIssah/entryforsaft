import React from 'react';
import DescriptionStrip from '../../components/DescriptionStrip';
import RFGridWrapper from '../../components/GridWrapper';
import RFQuoteCard from '../../components/QuoteCard';
import RFHeader from '../../components/RFHeader';
import './styles.css';
import {quotes} from './utils';

const RFQuotes = () => {
  return (
    <div className="rfQuotes">
      <RFHeader title="RFQuotes" />
      <DescriptionStrip
        title="Quotes"
        description="Popular Quotations by your favorite Shuyuukh"
      />
      <RFGridWrapper>
        {quotes.map((quote, index) => (
          <RFQuoteCard key={index} {...quote} />
        ))}
      </RFGridWrapper>
    </div>
  );
};

export default RFQuotes;
