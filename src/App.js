import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Topics from "./Topics";
import One from "./One";

const Home = () => {
  return (
    <div>
      <h1>This is HOME page</h1>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
}
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/topics">
            <Topics />
          </Route>
          <Route path="/topics/:id" component={One}>
           
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
