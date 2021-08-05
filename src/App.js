import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './ui/home';
import Entry from './ui/entry';
import Mainuuu from './ui/mainuu';
import RFHome from './pages/RFHome';
import RFFaqs from './pages/RFFaqs';
import RFAskUs from './pages/RFAskUs';
import RFShuyuukh from './pages/RFShuyuukh';
import RFNews from './pages/RFNews';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/entry" >
            <Entry/>
          </Route>
          <Route path="/main" >
            <Mainuuu/>
          </Route>
          <Route path="/rf" >
            <RFHome/>
          </Route>
          <Route path="/faqs" >
            <RFFaqs/>
          </Route>
          <Route path="/askUs" >
            <RFAskUs/>
          </Route>
          <Route path="/shuyuukh" >
            <RFShuyuukh/>
          </Route>
          <Route path="/news" >
            <RFNews/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
