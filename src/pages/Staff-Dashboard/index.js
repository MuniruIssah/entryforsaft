import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import "./styles.css";
const { Header, Content, Footer, Sider } = Layout;

const StaffDashboard = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const [selected, setSelected] = useState();

  useEffect(() => {
    switch (pathname) {
      case "/staff":
        setSelected("1");
        break;
      case "/staff/issues":
        setSelected("2");
        break;
      case "/staff/create":
        setSelected("3");
        break;
      case "/staff/apps":
        setSelected("4");
        break;
      default:
        break;
    }
  }, [pathname]);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="40"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo"></div>
        <Menu theme="dark" mode="inline" selectedKeys={[selected]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to={path}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            <Link to={`${path}/issues`}>Issues</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to={`${path}/create`}>Create</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreOutlined />}>
            <Link to={`${path}/apps`}>All Apps</Link>
          </Menu.Item>

          <Menu.Item key="5" icon={<LogoutOutlined />} danger>
            {/* Back to Profile */}
            <Link to="/profile">Back to Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content
        style={{
          padding: "0px 16px 0px",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
            overflow: "scroll",
            height: "100%",
          }}
        >
          <Switch>
            <Route path={`${path}/issues`}>These are all the issues</Route>
            <Route path={`${path}/apps`}>These are all the apps</Route>
            <Route path={`${path}/create`}>This is the canvas</Route>
            <Route exact path={path}>
              Main Dashboard
            </Route>
          </Switch>
        </div>
      </Content>
    </Layout>
  );
};

export default StaffDashboard;
