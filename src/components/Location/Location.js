import React from "react";
import {Map} from "../Map/Map";
import "./Location.css";

export class Location extends React.Component {
  render() {
    return (
      <div className="location section" id="location">
        <h2>Location</h2>
        <Map/>
      </div>  
    );
  }
}

