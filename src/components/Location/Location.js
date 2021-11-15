import React from "react";
import {Map} from "../Map/Map";
import "./Location.css";

export class Location extends React.Component {
  render() {
    return (
      <div className="location section" id="location">
        <br/>
        There are four areas of town we recommend for you to stay in. Each one of them offers something different, depending on what you’re most interest. 
        We will explain more below.
        <h2>Bello Horizonte</h2>
        It’s the closest area to the airport and wedding venue. It’s the farthest from downtown Santa Marta (approx. 25-minute car ride) and it is also the quietest part of town when it comes to nightlife and entertainment.
        It does have the nicer beaches and best hotels. There are also plenty of rental options in this area as well – this is where the groom and bride will be staying 
        <br/>
        Recommended hotels:<br/>
        Zuana Beach Resort
        Irotama Hotel
        Santa Marta Marriot Resort
        Sintana Resort
        {/* <Map/> */}
        <br/>

        <p>
        <h2>Pozos Colorados</h2>
        Like Bello Horizonte, Horizonte, only five more minutes towards downtown Santa Marta. There are hotels and lots of Airbnb rentals available in this area.
        </p>

        <p>
        <h2>El Rodadero</h2>
        It’s about 15-minute car ride to the wedding venue and 20 minutes from the airport. There are a lot of economic hotel options in this area of town, as well as rentals. It’s the most touristic area of Santa Marta for Colombians. The beach itself is not as pretty due to pollution from tourism, but there are lots of boats that you can hop on to go to really nice beaches. 
This area of town has a lot of nightlife and entertainment, as well as restaurants and bars.
        </p>

        <p>
        <h2>Santa Marta (downtown Santa Marta)</h2>
        It’s the farthest area from the airport and the wedding venue, but still very attractive, nonetheless. It has a lot of historic architecture, restaurants, bars, and night clubs. Although there is a bay area, not many people swim here due to pollution from ocean traffic. 
        </p>
      </div>  
    );
  }
}

