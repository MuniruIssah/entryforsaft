// import { faTh } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import { AppstoreFilled } from "@ant-design/icons";

import React from "react";
import { AllPages } from "../utils";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import RFHeader from "../components/RFHeader";
import DescriptionStrip from "../components/DescriptionStrip";
const AppListStripLayout = ({
  title='Test',
  children,
  description='i am the description',
  descriptionTitle='Test Page',
}) => {
  return (
    <div className="rfAskUs">
      <RFHeader title={title} />
      <AppStrip />
      <DescriptionStrip title={descriptionTitle} description={description} />

      {children}
    </div>
  );
};

export default AppListStripLayout;

const AppStrip = () => {
  return (
    <div className="appStrip">
      {AllPages.map((item) => (
        <AppHolder {...item} />
      ))}
    </div>
  );
};

const AppHolder = ({ name, icon }) => {
  return (
    <div className="appHolder current">
      <FontAwesomeIcon className="appHIcon" icon={icon} />
      <span>{name}</span>
    </div>
  );
};
