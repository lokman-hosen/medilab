import logo from './logo.svg';
//import './assets/css/App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MainContent from "./components/mainContent";


function App() {
  return (
    <div className="App">
        <Topbar />
        <Navbar />
        <Hero />
        <MainContent />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </div>
  );
}

export default App;
