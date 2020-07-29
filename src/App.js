import "./App.css";
import Provider from "./components/context";
import React from "react";
import Home from "./components/Home";
import Addnew from "./components/addnew";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import About from "./components/about";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Nav branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/addnew" component={Addnew} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
