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
    description:"This is Ruuhul Faida's Website",
    image: sheehu,
  },
  {
    label: 'Mawluud',
    description:"This is Ruuhul Faid's Website",

    image: sheehu,
  },
  {
    label: "FAQ's",
    description:"This is Ruuhul Faid's Website",

    image: sheehu,
  },
  {
    label: 'Proof',
    description:"This is Ruuhul Faid's Website",
    image: sheehu,
  },


];
const RFHome = () => {
  return (
    <div className="rfHome">
      <RFHeader title="TariqaOnline" />
      <DescriptionStrip description="Where Everything Tariqa Lives" title="Tariqa Online"/>
      {/* <RfHomeContentWrapper /> */}
    </div>
  );
};

export default RFHome;

const RfHomeContentWrapper = () => {
  return (
    <div className="rfHomeContentWrapper">
      <span className="allAppSpan">All Apps</span>
      <div className="appListWrapper">
        {AppList.map(item => (
          <RFAppListItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};
