import React from 'react';
import RFHeader from '../../components/RFHeader';
import DescriptionStrip from '../../components/DescriptionStrip';
import FilterAndGrid from '../../components/FilterAndGrid';
import './styles.css';
import {Filters, Shuyuukh} from './utils';
import RFGridWrapper from '../../components/GridWrapper';
import RFSheikhListItem from '../../components/SheikhListItem';
import {UnorderedListOutlined, AppstoreOutlined} from '@ant-design/icons';
import RFNewsCard from '../../components/NewsCard';
import RFNewsCardAlt from '../../components/NewsCardAlt';
const RFNews = () => {
  return (
    <div className="rfNews">
      <RFHeader title="RFNews" />
      <DescriptionStrip
        title="News"
        description="The latest in Tariqa News and more"
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
          {Shuyuukh.map(sheikh => (
            // <RFSheikhListItem key={sheikh.name} {...sheikh}/>
            // <RFNewsCard key={sheikh.name}/>
            <RFNewsCardAlt />
            // <RFSheikhCard key={sheikh.name} {...sheikh}/>
          ))}
        </RFGridWrapper>
      </FilterAndGrid>
    </div>
  );
};

export default RFNews;

const IconBlock = ({children}) => {
  return <div className="iconBlock">{children}</div>;
};
