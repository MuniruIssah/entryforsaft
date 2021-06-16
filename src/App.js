import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './ui/home';
import Entry from './ui/entry';
import Mainuuu from './ui/mainuu';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
