import './App.css';
import React, { useState } from "react";
import {Faq} from './components/Faq/Faq';
import {Location} from './components/Location/Location';
import Home from './components/Home/Home';
import {DressCode} from './components/Dresscode/Dresscode';
import {Rsvp} from './components/RSVP/RSVP';
import {Details} from './components/Details/Details';
import Navibar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navibar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/location" component={Location} />
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/dress" component={DressCode} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
