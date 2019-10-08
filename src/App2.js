import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <h1>This is ABOUT page</h1>
    </div>
  );
}

const Projects = () => {
  return (
    <div>
      <h1>This is PROJECTS page</h1>
    </div>
  );
}

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/projects">
              PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}


const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
             
      </Router>
    </div>
  );
}

export default App;
