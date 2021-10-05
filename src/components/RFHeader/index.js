import React from "react";
import "./styles.css";
import {
  DashboardOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, message } from "antd";
import LoginCompoonent from "../LoginComponent";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
const RFHeader = ({ title }) => {
  const { currentUser } = useAuth();
  return (
    <header className="rfHeader">
      <div>
        <span>{title}</span>
      </div>
      <div className="rfHeaderSecondSection">
        {currentUser ? <ProfileNavigation /> : <LoginCompoonent />}
      </div>
    </header>
  );
};

export default RFHeader;

const ProfileNavigation = () => {
  const { logout } = useAuth();
  const handleSignOut = async () => {
    try {
      await logout();
      message.success("Logged out");
    } catch (error) {
      message.error(error);
    }
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Button block type="primary" danger onClick={handleSignOut}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Avatar size={28} icon={<UserOutlined />} />
    </Dropdown>
  );
};
