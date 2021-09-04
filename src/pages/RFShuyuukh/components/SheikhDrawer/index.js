import { Drawer, Image } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { faMapMarkerAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";
const SheikhDrawer = ({ visible, onClose, sheikh }) => {
  return (
    <Drawer
      title={sheikh.name}
      visible={visible}
      className="sheikhDrawer"
      headerStyle={{ textAlign: "left" }}
      onClose={onClose}
      width="min(400px,100vw)"
      placement="right"
    >
      <Avatar icon={<UserOutlined />} size={100} />
      <span className="location">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          style={{ fontSize: 20, color: "#b80000" }}
        />{" "}
        {sheikh.town}, {sheikh.country}
      </span>
      <Image.PreviewGroup>
        <div className="sheikhDrawerGallery">
          <Image src="https://via.placeholder.com/100" />
          <Image src="https://via.placeholder.com/100" />
          <Image src="https://via.placeholder.com/100" />
          <Image src="https://via.placeholder.com/100" />
          <Image src="https://via.placeholder.com/100" />
          <Image src="https://via.placeholder.com/100" />
        </div>
      </Image.PreviewGroup>
    </Drawer>
  );
};

export default SheikhDrawer;
