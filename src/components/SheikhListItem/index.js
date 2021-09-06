import React, { useState } from "react";
import sheehu from "../../assets/sheehu.JPG";
import { FlagFilled } from "@ant-design/icons";
import ghanaflag from "../../assets/ghanaflag.png";
import senegalflag from "../../assets/senegalflag.png";
import nigeriaflag from "../../assets/nigerianflag.png";
import moroccoflag from "../../assets/moroccoflag.jpg";

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
  let flag;
  if (country === "Ghana") {
    flag = ghanaflag;
  } else if (country === "Nigeria") {
    flag = nigeriaflag;
  } else if (country === "Senegal") {
    flag = senegalflag;
  } else if (country === "Morocco") {
    flag = moroccoflag;
  }
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
        <div
          className="flagSection"
          style={{ backgroundImage: `url(${flag})` }}
        ></div>
      </div>
    </>
  );
};

export default RFSheikhListItem;
