import { Avatar, Button, Col, Row } from "antd";
import React from "react";
import { UserOutlined, MailOutlined, EditOutlined } from "@ant-design/icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faPen, faUserEdit } from "@fortawesome/free-solid-svg-icons";
const ProfileCard = ({ name }) => {
  return (
    <Row className="profileCard">
      <FirstColumn name={name.slice(0, 1)} />
      <SecondColumn name={name} />
    </Row>
  );
};

export default ProfileCard;

const FirstColumn = ({ name }) => {
  return (
    <>
      <Col md={5} xs={0}>
        <div className="avatarColumn">
          <Avatar size={70} style={{backgroundColor:'#373737'}}> {name}</Avatar>
        </div>
      </Col>
      <Col md={0} xs={24}>
        <div className="avatarColumn">
          <Avatar size={40}> {name}</Avatar>
        </div>
      </Col>
    </>
  );
};
const SecondColumn = ({ name }) => {
  return (
    <>
      <Col md={19} xs={0}>
        <div className="detailsColumn">
          <span className="dCName">{name}</span>
          <Button size="small" className="dCButton">
            Edit Profile
          </Button>
        </div>
      </Col>
      <Col md={0} xs={24}>
        <div className="detailsColumn2">
          <span className="dCName">{name}</span>
          <Button size="small" className="dCButton">
            Edit Profile
          </Button>
        </div>
      </Col>
    </>
  );
};
