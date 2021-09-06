import React, { useState } from "react";
import "./styles.css";
import { ArrowRightOutlined } from "@ant-design/icons";
const RFAppListItem = ({ image, label, description, link }) => {
  const handleClick = () => {
    window.location.href = link;
  };
  return (
    <div className="rfAppListItem" onClick={handleClick}>
      <div
        className="listLogo"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="labelAndDescription">
        <span>{label}</span>
        <span className="desc">{description}</span>
      </div>
      <ArrowRightOutlined className="visitIcon" />
    </div>
  );
};

export default RFAppListItem;
