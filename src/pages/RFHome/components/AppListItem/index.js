import React, { useState } from "react";
import "./styles.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const RFAppListItem = ({ image, label, description, link }) => {
  return (
    <Link to={`${link}`}>
      <div className="rfAppListItem">
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
    </Link>
  );
};

export default RFAppListItem;
