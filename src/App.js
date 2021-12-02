import './App.css';
import React, { useEffect, useState } from "react";
import Faq from './components/Faq/Faq';
import Location from './components/Location/Location';
import Home from './components/Home/Home';
import DressCode from './components/Dresscode/Dresscode';
import Rsvp from './components/RSVP/RSVP';
import Details from './components/Details/Details';
import Navibar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMap } from "maplibre-gl-js-amplify";
import Map from './components/Map/Map';
import "maplibre-gl/dist/maplibre-gl.css";
// const INITIAL_VIEWPORT = {
//   longitude: 11.2404,
//   latitude: 74.2110
// }


function App() {
  // const [map, setMap] = useState();

  // useEffect(() =>{
  //   const initializeMap = async () => {
  //     const map = await createMap({
  //       container: "map",
  //       center: [INITIAL_VIEWPORT.longitude, INITIAL_VIEWPORT.latitude],
  //       zoom: 13,
  //     })
  //     setMap(map);
  //   };
  //   initializeMap();
  // },[]);

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
      {/* <Map myMap={map}/> */}
    </Router>
  );
};
export default App;
