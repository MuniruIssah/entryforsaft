import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Drawer, Form, Input, message } from "antd";
import React, { useRef } from "react";
import "./styles.css";
import { useState } from "react";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignUpForm";

const LoginCompoonent = () => {
  const [showLoginDrawer, setShowLoginDrawer] = useState(false);
  const [login, setLogin] = useState(true);

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
            <h2>{login ? "Log In" : "Join Tijaniyya Online"}</h2>
            {login ? <LoginForm /> : <SignUpForm />}
            <Button
              type="link"
              size="large"
              block
              onClick={() => setLogin(!login)}
            >
              {login
                ? "Do not have an Account? Sign up"
                : "Already have an Account? Log in"}
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LoginCompoonent;
