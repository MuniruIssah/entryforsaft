// import { faTh } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import { AppstoreFilled } from "@ant-design/icons";

import React from "react";
import { AllPages } from "../utils";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RFHeader from "../components/RFHeader";
import DescriptionStrip from "../components/DescriptionStrip";
import { Link,useLocation } from "react-router-dom";
const AppListStripLayout = ({
  title='Test',
  children,
  description='i am the description',
  descriptionTitle='Test Page',
}) => {
  return (
    <div className="rfAskUs">
      <RFHeader title={title} />
      <DescriptionStrip title={descriptionTitle} description={description} />

      {children}
    </div>
  );
};

export default AppListStripLayout;

export const AppStrip = () => {

  return (
    <div className="appStrip">
      {AllPages.map((item,index) => (
        <AppHolder {...item} key={index}/>
      ))}
    </div>
  );
};

const AppHolder = ({ name, icon,link }) => {
  const {pathname}=useLocation()
  return (
    <Link className={`appHolder ${pathname==link?'current':''}`} to={link}>
      <FontAwesomeIcon className="appHIcon" icon={icon} />
      <span>{name}</span>
    </Link>
  );
};
