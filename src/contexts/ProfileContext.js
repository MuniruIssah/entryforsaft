import React, { useContext, useState } from "react";
import first from "../assets/islamicArt3.jpg";
import second from "../assets/islamicArt2.jpg";
import third from "../assets/islamicArt.jpg";
import { Spin } from "antd";
const ProfileContext = React.createContext();
//using the context
export function useProfile() {
  return useContext(ProfileContext);
}

//provide then cotext
export default function ProfileProvider({ children }) {
    const [loading, setLoading] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [allBackgrounds, setAllBackgrounds] = useState([first, second, third]);

  function changeBackground(index) {
    setCurrentBackground(index);
  }

  const value = {
    currentBackground,
    allBackgrounds,
    changeBackground,
  };
  return (
    <ProfileContext.Provider value={value}>
      {loading ? <Loader /> : <> {children}</>}
    </ProfileContext.Provider>
  );
}

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
};
