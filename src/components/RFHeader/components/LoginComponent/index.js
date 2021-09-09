import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Drawer, Form, Input, message } from "antd";
import React, { useRef } from "react";
import "./styles.css";
import { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";

const LoginCompoonent = () => {
  const [showLoginDrawer, setShowLoginDrawer] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);
      console.log(email);

      await signUp(email, password);
      message.success("Successfully signed up");
    } catch (error) {
      setError("Failed to sign up");
    }
    setLoading(false);
  };

  return (
    <>
      <Button type="text" onClick={() => setShowLoginDrawer(true)}>
        Login
      </Button>
      <Drawer
        placement="bottom"
        title="Tijaniyya Online"
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
            <Form layout="vertical" onFinish={handleLogin}>
              <Form.Item
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                ]}
              >
                <Input
                  size="large"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
                ref={passwordRef}
              >
                <Input.Password
                  size="large"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  size="large"
                  className="myLoginButton"
                  block
                  disabled={loading}
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <Button type="link" size="large" block>
              Do not have an Account? Signup
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LoginCompoonent;
