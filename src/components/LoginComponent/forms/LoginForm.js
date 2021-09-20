import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Drawer, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useAuth } from '../../../contexts/AuthContext'
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    const { login } = useAuth();
  
    const handleLogin = async () => {
      try {
        setError("");
        setLoading(true);
        console.log(email);
  
        await login(email, password);
        message.success("Successfully logged in");
      } catch (error) {
        setError("Failed to log in ");
      }
      setLoading(false);
    };
  
    return (
      <Form layout="vertical" onFinish={handleLogin}>
        <Form.Item
          label="Email"
          rules={[{ required: true, message: "Please enter your email!" }]}
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
          rules={[{ required: true, message: "Please enter your password!" }]}
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
    );
}

export default LoginForm
