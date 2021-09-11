import { Drawer, Image } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import {
  faChevronLeft,
  faChevronRight,
  faMapMarkerAlt,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import SheikhDrawerMap from "../SheikhDrawerMap";
const SheikhDrawer = ({ visible, onClose, sheikh }) => {
  return (
    <Drawer
      title={sheikh.name}
      visible={visible}
      className="sheikhDrawer"
      headerStyle={{ textAlign: "left" }}
      onClose={onClose}
      width="min(420px,100vw)"
      placement="right"
    >
      <Avatar
        src={sheikh.profile}
        style={{ border: "1px solid gainsboro" }}
        icon={<UserOutlined />}
        size={100}
      />
      <span className="location">
        {sheikh.town}, {sheikh.country}
      </span>
      <SheikhDrawerMap town={sheikh.town} />
      <details className="sheikhImageAccordion">
        <summary>
          <span>Expand Images</span>
          <FontAwesomeIcon
            style={{ color: "grey", fontSize: 13 }}
            icon={faChevronRight}
          />
        </summary>
        <Image.PreviewGroup>
          <div className="sheikhDrawerGallery">
            <Image src="https://via.placeholder.com/90" />
            <Image src="https://via.placeholder.com/90" />
            <Image src="https://via.placeholder.com/90" />
            <Image src="https://via.placeholder.com/90" />
            <Image src="https://via.placeholder.com/90" />
            <Image src="https://via.placeholder.com/90" />
          </div>
        </Image.PreviewGroup>
      </details>
      {/* */}
    </Drawer>
  );
};

export default SheikhDrawer;
