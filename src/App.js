import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./ui/home";
import Entry from "./ui/entry";
import Mainuuu from "./ui/mainuu";
import RFHome from "./pages/RFHome";
import RFFaqs from "./pages/RFFaqs";
import RFAskUs from "./pages/RFAskUs";
import RFShuyuukh from "./pages/RFShuyuukh";
import RFNews from "./pages/RFNews";
import RFQuotes from "./pages/RFQuotes";
import AuthProvider from "./contexts/AuthContext";
import RFWird from "./pages/RFTiD";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
