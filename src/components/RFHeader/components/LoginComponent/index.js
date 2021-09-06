import { Button, Drawer } from "antd";
import React from "react";
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
        Hey im that drawer
      </Drawer>
    </>
  );
};

export default LoginCompoonent;
