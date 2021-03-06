import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About'
import Connect from './components/Connect'
import Homepage from './components/Homepage'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'


export default function App() {
  return (
    <Router>
    <div>
      <h1>Blaire Baker</h1>
      <nav>
        
          <Link to="/">Home</Link>
        
          <Link to="/about">About</Link>
        
          <Link to="/resume">Resume</Link>
        
          <Link to="/portfolio">Portfolio</Link>
        
          <Link to="/connect">Connect</Link>
       
      </nav>
      </div>

      <Switch>
        <Route exact path="/">
            <Homepage />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/connect">
          <Connect />
        </Route>
      </Switch>

    </Router>

    
  );
}
