import React from "react";
import "./styles.css";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import LoginCompoonent from "./components/LoginComponent";
const RFHeader = ({ title }) => {
  return (
    <header className="rfHeader">
      <div>
        <span>{title}</span>
      </div>
      <div>
         <LoginCompoonent/>
      </div>
    </header>
  );
};

export default RFHeader;
