import React from 'react';
import './styles.css';
import { DashboardOutlined,UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd';
const RFHeader = ({title}) => {
  return <header className="rfHeader">
      <div>
          {/* <div className="headerAppLogo" style={{backgroundImage:`url(${sheehu})`}}></div> */}
          <span>{title}</span>
      </div>
      <div>
          {/* <Avatar icon={<UserOutlined/>} /> */}
      </div>
  </header>;
};

export default RFHeader;
