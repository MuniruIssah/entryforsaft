import React, { useState } from "react";
import "./styles.css";
import {
  DashboardOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Input,
  Menu,
  message,
  Tooltip,
  Form,
} from "antd";
import LoginCompoonent from "../LoginComponent";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { AppStrip } from "../../layouts/AppListStripLayout";
const RFHeader = ({ title }) => {
  const { currentUser } = useAuth();
  return (
    <div>
      <header className="rfHeader">
        <div>
          <span>{title}</span>
        </div>
        <div className="rfHeaderSecondSection">
          {currentUser ? <ProfileNavigation /> : <LoginCompoonent />}
        </div>
      </header>
      <AppStrip />
    </div>
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
    <>
      <ReportIssue />
      <Dropdown overlay={menu} trigger={["click"]}>
        <Avatar size={28} icon={<UserOutlined />} />
      </Dropdown>
    </>
  );
};

const ReportIssue = () => {
  const [showReportDrawer, setShowReportDrawer] = useState(false);
  return (
    <>
      <Tooltip title="Report An Issue">
        <InfoCircleOutlined
          onClick={() => setShowReportDrawer(true)}
          style={{
            fontSize: "20px",
            marginRight: 10,
            color: "orange",
            cursor: "pointer",
          }}
        />
      </Tooltip>

      {/* report drawer */}
      <Drawer
        // className="sheikhDrawer"
        headerStyle={{ textAlign: "left" }}
        onClose={() => setShowReportDrawer(false)}
        width="min(420px,100vw)"
        placement="right"
        title="Report An Issue"
        visible={showReportDrawer}
      >
        <Form>
          <p>Please type out the issue you have with this page</p>
          <Form.Item>
            <Input.TextArea placeholder="The team is ever ready to effect your changes" />
          </Form.Item>
          <Form.Item style={{ textAlign: "right" }}>
            <Button
              type="primary"
              style={{ backgroundColor: "orange", border: "none" }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
