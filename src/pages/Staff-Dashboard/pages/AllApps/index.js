import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";
import React from "react";
import { AllPages } from "../../../../utils";
import "./styles.css";

const StaffAllApps = () => {
  return (
    <div className="staffAllApps">
      <h1>All Apps</h1>
      <div className="allApps">
        {AllPages.map((page, index) => (
          <Card hoverable key={index} className='appCard'>
            <span><FontAwesomeIcon icon={page.icon} /></span>
            <span>{page.name}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StaffAllApps;
