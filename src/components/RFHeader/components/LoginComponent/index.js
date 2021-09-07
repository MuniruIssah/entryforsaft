import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Drawer, Form, Input } from "antd";
import React from "react";
import "./styles.css";
import { useState } from "react";

const LoginCompoonent = () => {
  const [showLoginDrawer, setShowLoginDrawer] = useState(false);
  return (
    <>
      <Button type="text" onClick={() => setShowLoginDrawer(true)}>
        Login
      </Button>
      <Drawer
        placement="bottom"
        height="100%"
        visible={showLoginDrawer}
        onClose={() => setShowLoginDrawer(false)}
      >
        {" "}
        <div className="drawerWrapper">
          <div className="loginWrapper">
            <Button block size="large">
              <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 15 }} />{" "}
              Sign In with Google
            </Button>
            <Divider>or</Divider>
            <Form layout="vertical">
              <Form.Item label="Email">
                <Input size="large" type="email" />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password size="large" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large" className='myLoginButton' block>
                  Login
                </Button>
              </Form.Item>
            </Form>
            <Button type="link">Go to Signup</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LoginCompoonent;
