import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import RFHome from "./pages/RFHome";
import RFFaqs from "./pages/RFFaqs";
import RFAskUs from "./pages/RFAskUs";
import RFShuyuukh from "./pages/RFShuyuukh";
import RFNews from "./pages/RFNews";
import RFQuotes from "./pages/RFQuotes";
import AuthProvider from "./contexts/AuthContext";
import RFWird from "./pages/RFTiD";
import "leaflet/dist/leaflet.css";
import Profile from "./pages/Profile";
import StaffDashboard from "./pages/Staff-Dashboard";
import ProfileProvider from "./contexts/ProfileContext";
import AppListStripLayout from "./layouts/AppListStripLayout";
function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <RFHome />
              </Route>
              <Route path="/shuyuukh">
                <RFShuyuukh />
              </Route>
              <Route path="/wird">
                <RFWird />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/staff">
                <StaffDashboard />
              </Route>
              <Route path="/test">
                <AppListStripLayout />
              </Route>
              {/* <Route path="/faqs" >
            <RFFaqs/>
          </Route>
          <Route path="/askUs" >
            <RFAskUs/>
          </Route> */}
              {/* <Route path="/news" >
            <RFNews/>
          </Route>
          <Route path="/quotes" >
            <RFQuotes/>
          </Route> */}
            </Switch>
          </Router>
        </AuthProvider>
      </ProfileProvider>
    </div>
  );
}

export default App;
