import { Avatar, Col, Input, Row, Form, Image } from "antd";
import React from "react";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useAuth } from "../../contexts/AuthContext";
import "./styles.css";
import ProfileCard from "./components/ProfileCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useProfile } from "../../contexts/ProfileContext";
import { AppStrip } from "../../layouts/AppListStripLayout";

const Profile = () => {
  const { currentUser } = useAuth();
  const { currentBackground, allBackgrounds, changeBackground } = useProfile();

  return (
    <div
      className="profilePage"
      style={{ backgroundImage: `url(${allBackgrounds[currentBackground]})` }}
    >
      <div className='profileHeader'>
      {/* <AppStrip/> */}
      </div>
      <ProfileCard name={currentUser?.displayName} />
      <div className="profileCard" style={{ marginTop: "2rem" }}>
        <Form
          layout="vertical"
          style={{ width: "90%", margin: "1rem 5% 1.5rem" }}
        >
          <h3 style={{ textAlign: "left" }}>Details</h3>
          <Form.Item label="Name" className="formItems">
            <Input
              disabled
              type="text"
              prefix={<UserOutlined />}
              value={currentUser?.displayName}
            />
          </Form.Item>
          <Form.Item label="Email" className="formItems">
            <Input
              disabled
              prefix={<MailOutlined />}
              type="email"
              value={currentUser?.email}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="profileCard" style={{ marginTop: "2rem" }}>
        <ChangeTheme />
      </div>
      <Link to="/staff">
        <div
          className="profileCard"
          style={{
            minHeight: 60,
            fontSize: 15,
            marginTop: "2rem",
            backgroundColor: "#0e1013",
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <span>Staff Dashboard</span>
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 18 }} />
        </div>
      </Link>
    </div>
  );
};

export default Profile;

const ChangeTheme = () => {
  const { currentBackground, allBackgrounds, changeBackground } = useProfile();

  // Handler for changing background
  const handleChangeBackground = (index) => {
    changeBackground(index);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "1.5rem 0px",
      }}
    >
      {allBackgrounds.map((item, index) => (
        <div
          onClick={() => handleChangeBackground(index)}
          className={`themeToggle ${
            currentBackground === index ? "selectedBg" : ""
          }`}
          style={{ backgroundImage: `url(${item})` }}
        >
          {console.log(item === index)}
        </div>
      ))}
    </div>
  );
};
