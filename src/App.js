
import './assets/App.css';
import Home from './pages/home'
import Contact from './pages/contact'
import Skills from './pages/skills'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/skills">
          <Skills></Skills>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
