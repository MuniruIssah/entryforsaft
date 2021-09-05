import React, { useState } from "react";
import sheehu from "../../assets/sheehu.JPG";
import { FlagFilled } from "@ant-design/icons";
import "./styles.css";
import SheikhDrawer from "../../pages/RFShuyuukh/components/SheikhDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
const RFSheikhCard = ({
  image = sheehu,
  name = "Sheikh Ibrahim Inyass",
  country,
  town,
  profile,
}) => {
  const [showSheikhDrawer, setShowSheikhDrawer] = useState(false);
  return (
    <>
      <SheikhDrawer
        visible={showSheikhDrawer}
        onClose={() => setShowSheikhDrawer(false)}
        sheikh={{ name, country, town, profile }}
      />
      <div className="rfSheikhCard" onClick={() => setShowSheikhDrawer(true)}>
        <div
          className="sheikhImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="sheikhDetails">
          <span>{name}</span>
          <span>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              icon={faMapMarkerAlt}
              style={{ fontSize: 16, color: "#b80000" }}
            />
            &nbsp;
            {town}, {country}
          </span>
        </div>
      </div>
    </>
  );
};

export default RFSheikhCard;
