import React from "react";
// import {Map} from "../Map/Map";
import "./Location.css";
import { Accordion } from 'react-bootstrap';

export class Location extends React.Component {
  render() {
    return (
      <div className="location section" id="location">
        There are four areas of town we recommend for you to stay in. Each one of them offers something different, depending on what you’re most interest. 
        We will explain more below.
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bello Horizonte</Accordion.Header>
            <Accordion.Body>
              It’s the closest area to the airport and wedding venue. 
              It’s the farthest from downtown Santa Marta (approx. 25-minute car ride) and 
              it is also the quietest part of town when it comes to nightlife and entertainment.
              It does have the nicer beaches and best hotels. 
              There are also plenty of rental options in this area as well – this is 
              where the groom and bride will be staying 
              <br/>
              <br/>
              Recommended hotels:<br/>
              Zuana Beach Resort, 
              Irotama Hotel,
              Santa Marta Marriot Resort,
              Sintana Resort
              {/* <Map/> */}
              <br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pozos Colorados</Accordion.Header>
            <Accordion.Body>
              Like Bello Horizonte, Horizonte, only five more minutes towards downtown Santa Marta. 
              There are hotels and lots of Airbnb rentals available in this area.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>El Rodadero</Accordion.Header>
            <Accordion.Body>
              It’s about 15-minute car ride to the wedding venue and 20 minutes from the airport. 
              There are a lot of economic hotel options in this area of town, as well as rentals. 
              It’s the most touristic area of Santa Marta for Colombians. 
              The beach itself is not as pretty due to pollution from tourism, 
              but there are lots of boats that you can hop on to go to really nice beaches. 
              This area of town has a lot of nightlife and entertainment, as well as restaurants and bars.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Santa Marta (downtown Santa Marta)</Accordion.Header>
            <Accordion.Body>
              It’s the farthest area from the airport and the wedding venue, but still very attractive, 
              nonetheless. It has a lot of historic architecture, restaurants, bars, and night clubs. 
              Although there is a bay area, not many people swim here due to pollution from ocean traffic. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>  
    );
  }
}

