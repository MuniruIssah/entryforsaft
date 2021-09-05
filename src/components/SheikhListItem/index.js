import React, { useState } from "react";
import sheehu from "../../assets/sheehu.JPG";
import { FlagFilled } from "@ant-design/icons";
import ghanaflag from "../../assets/ghanaflag.png";
import { Drawer } from "antd";
import "./styles.css";
import SheikhDrawer from "../../pages/RFShuyuukh/components/SheikhDrawer";
import { countryColors } from "../../utils";
const RFSheikhListItem = ({
  image = sheehu,
  name = "Sheikh Ibrahim Inyass",
  country,
  profile,
  town,
}) => {
  const [showSheikhDrawer, setShowSheikhDrawer] = useState(false);
  return (
    <>
      <SheikhDrawer
        visible={showSheikhDrawer}
        onClose={() => setShowSheikhDrawer(false)}
        sheikh={{ name, country, town, profile }}
      />
      <div
        className="rfSheikhListItem"
        onClick={() => setShowSheikhDrawer(true)}
      >
        <div
          className="sheikhImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="sheikhDetails">
          <span>{name}</span>
        </div>
        <div className="flagSection">
          <div style={{ backgroundColor: countryColors[country].first }}></div>
          <div style={{ backgroundColor: countryColors[country].second }}></div>
          <div style={{ backgroundColor: countryColors[country].third }}></div>
        </div>
      </div>
    </>
  );
};

export default RFSheikhListItem;
