import React, { useState } from "react";
import sheehu from "../../assets/sheehu.JPG";
import { FlagFilled } from "@ant-design/icons";
import { Drawer } from "antd";
import "./styles.css";
import SheikhDrawer from "../../pages/RFShuyuukh/components/SheikhDrawer";
const RFSheikhListItem = ({
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
        sheikh={{name, country, town}}
      />
      <div className="rfSheikhListItem" onClick={()=>setShowSheikhDrawer(true)}>
        <div
          className="sheikhImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="sheikhDetails">
          <span>{name}</span>
        </div>
        {/* <div className="flag">
        <FlagFilled/>
      </div> */}
      </div>
    </>
  );
};

export default RFSheikhListItem;
