import React, { useState } from "react";
import sheehu from "../../assets/sheehu.JPG";
import { FlagFilled } from "@ant-design/icons";
import "./styles.css";
import SheikhDrawer from "../../pages/RFShuyuukh/components/SheikhDrawer";
const RFSheikhCard = ({
  image = sheehu,
  name = "Sheikh Ibrahim Inyass",
  country,
  town,
}) => {
  const [showSheikhDrawer, setShowSheikhDrawer] = useState(false);
  return (
    <>
      <SheikhDrawer
        visible={showSheikhDrawer}
        onClose={() => setShowSheikhDrawer(false)}
        sheikh={{ name, country, town }}
      />
      <div className="rfSheikhCard" onClick={() => setShowSheikhDrawer(true)}>
        <div
          className="sheikhImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flag">
          <FlagFilled />
        </div>
        <div className="sheikhDetails">
          <span>{name}</span>
        </div>
      </div>
    </>
  );
};

export default RFSheikhCard;
