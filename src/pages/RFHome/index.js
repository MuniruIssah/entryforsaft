import React from "react";
import DescriptionStrip from "../../components/DescriptionStrip";
import "./styles.css";
import RfAppCard from "./components/AppCard";
import RFHeader from "../../components/RFHeader";
import RFAppListItem from "./components/AppListItem";
import { AppList } from "../../utils";

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
