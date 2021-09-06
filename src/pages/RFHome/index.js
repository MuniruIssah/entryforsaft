import React from "react";
import DescriptionStrip from "../../components/DescriptionStrip";
import sheehu from "./assets/sheehu.JPG";
import "./styles.css";
import RfAppCard from "./components/AppCard";
import RFHeader from "../../components/RFHeader";
import RFAppListItem from "./components/AppListItem";

const AppList = [
  // {
  //   label: 'Ruuhul Faida',
  //   description:"This is Ruuhul Faida's Website",
  //   image: sheehu,
  // },
  {
    label: "Shuyuukh",
    description: "All Sheikhs of Tijjaniyya",
    link: "shuyuukh",
    image: sheehu,
  },
  // {
  //   label: "FAQ's",
  //   description:"Frequently Asked Questions",

  //   image: sheehu,
  // },
];
const RFHome = () => {
  return (
    <div className="rfHome">
      <RFHeader title="Home" />
      <DescriptionStrip
        description="The Information hub of everything Tijaniyya"
        title="Tijaniyya Online"
      />
      <RfHomeContentWrapper />
    </div>
  );
};

export default RFHome;

const RfHomeContentWrapper = () => {
  return (
    <div className="rfHomeContentWrapper">
      <span className="allAppSpan">All Apps</span>
      <div className="appListWrapper">
        {AppList.map((item) => (
          <RFAppListItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};
