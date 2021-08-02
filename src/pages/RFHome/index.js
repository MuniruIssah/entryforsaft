import React from 'react';
import DescriptionStrip from '../../components/DescriptionStrip';
import sheehu from './assets/sheehu.JPG';
import './styles.css';
import RfAppCard from './components/AppCard';
import RFHeader from '../../components/RFHeader';
import RFAppListItem from './components/AppListItem';

const AppList = [
  {
    label: 'Ruuhul Faida',
    image: sheehu,
  },
  {
    label: 'Mawluud',
    image: sheehu,
  },
  {
    label: "FAQ's",
    image: sheehu,
  },
  {
    label: 'Proof',
    image: sheehu,
  },


];
const RFHome = () => {
  return (
    <div className="rfHome">
      <RFHeader title="RfHub" />
      <RfHomeContentWrapper />
    </div>
  );
};

export default RFHome;

const RfHomeContentWrapper = () => {
  return (
    <div className="rfHomeContentWrapper">
      <span className="allAppSpan">All Apps</span>
      {/* <div className="appGridWrapper">
        {AppList.map(item => (
          <RfAppCard key={item.label} {...item} />
        ))}
      </div> */}
      <div className="appListWrapper">
        {AppList.map(item => (
          <RFAppListItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};
