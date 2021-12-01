import React, { useEffect, useState } from "react";
// import {Map} from "../Map/Map";
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Map from '../../components/Map/Map';
import { createMap } from "maplibre-gl-js-amplify";

const INITIAL_VIEWPORT = {
  longitude: 11.2404,
  latitude: 74.2110
}

const Location = () => {
  const { t } = useTranslation();
  const [map, setMap] = useState();

  useEffect(() =>{
    const initializeMap = async () => {
      const map = await createMap({
        container: "map",
        center: [INITIAL_VIEWPORT.longitude, INITIAL_VIEWPORT.latitude],
        zoom: 13,
      })
      setMap(map);
    };
    initializeMap();
  },[]);

    return (
      <div className="" id="home">
          <div className="bg-text">
          <Card.Body>
            <div className="header">
              {t("location.main")}<br/>
              {t("location.main2")}<br/>
            </div>
            <div className="header">
              {/* <Image src="img/location.png" fluid/><br/> */}
              <Map myMap={map}/>
            </div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><b>Bello Horizonte</b></Accordion.Header>
                  <Accordion.Body>
                  <div className="header"><Image src="img/bellohorizante.png" fluid/><br/></div>
                    {t("location.belo.main")}
                    <br/>
                    <br/>
                    {t("location.belo.hotel_labels")}<br/>
                    <br/>
                    <a href="https://www.zuana.com/">{t("location.belo.zuana")}</a>,<br/>
                    <a href="https://www.irotama.com/">{t("location.belo.irotama")}</a>,<br/>
                    <a href="https://www.marriott.com/hotels/travel/smrmc-santa-marta-marriott-resort-playa-dormida/?gclid=Cj0KCQiAtJeNBhCVARIsANJUJ2EfybDkiPmehueu7lRkMyGxCcaZMXu43Qknnalc0aejwXxzTkuP2o4aAlN3EALw_wcB&gclsrc=aw.ds">{t("location.belo.marriott")}</a>,<br/>
                    <a href="https://planetofhotels.com/en/colombia/santa-marta/apartamento-en-sintana-resort">{t("location.belo.sintana")}</a><br/>
                    {/* <Map/> */}
                    <br/>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><b>Pozos Colorados</b></Accordion.Header>
                  <Accordion.Body>
                  <div className="header"><Image src="img/pozos.png" fluid/><br/></div>
                    {t("location.pozo.main")}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header><b>El Rodadero</b></Accordion.Header>
                  <Accordion.Body>
                  <div className="header"><Image src="img/El_Rodadero.jpg" fluid/><br/></div>
                    {t("location.elro.main")}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header><b>Santa Marta {t("location.sant.santa")}</b></Accordion.Header>
                  <Accordion.Body>
                  <div className="header"><Image src="img/santamarta1.png" fluid/><br/></div>
                    {t("location.sant.main")}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </div>
    </div>
    );
  };
  export default Location;

