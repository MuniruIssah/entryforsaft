import React from "react";
import { AllPages } from "../utils";
import "./styles.css";
const AppListStripLayout = () => {
  return (
    <div>
      <AppStrip />
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

const AppHolder = ({ name }) => {
  return <div className='appHolder'>{name}</div>;
};
