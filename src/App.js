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
      <h1>Blaire Baker</h1>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/resume">Resume</Link>
        </button>
        <button>
          <Link to="/portfolio">Portfolio</Link>
        </button>
        <button>
          <Link to="/connect">Connect</Link>
        </button>
      </nav>

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
