import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
