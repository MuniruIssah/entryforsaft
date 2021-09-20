import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Drawer, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const handleSignUp = async () => {
    try {
      setError("");
      setLoading(true);
      console.log(email);

      const result = await signUp(email, password, username);
      console.log(result);
      message.success("Successfully signed up");
    } catch (error) {
      setError("Failed to sign up");
    }
    setLoading(false);
  };

  return (
    <Form layout="vertical" onFinish={handleSignUp}>
      <Form.Item
        label="Username"
        rules={[{ required: true, message: "Please enter your username!" }]}
      >
        <Input
          size="large"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>
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
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
