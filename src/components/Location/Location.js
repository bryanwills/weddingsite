import React from "react";
// import {Map} from "../Map/Map";
import "./Location.css";
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';

const Location = () => {
  const { t } = useTranslation();
    return (
      <div className="location section" id="location">
        {t("location.main")}<br/>
        <div className="map">
        <Image src="img/location.png" fluid/><br/>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bello Horizonte</Accordion.Header>
            <Accordion.Body>
            <Image src="img/bellohorizante.png" fluid/><br/>
              {t("location.belo.main")}
              <br/>
              <br/>
              {t("location.belo.hotel_labels")}<br/>
              {t("location.belo.zuana")} 
              {t("location.belo.irotama")},
              {t("location.belo.marriott")},
              {t("location.belo.sintana")}
              {/* <Map/> */}
              <br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pozos Colorados</Accordion.Header>
            <Accordion.Body>
            <Image src="img/pozos.png" fluid/><br/>
              {t("location.pozo.main")}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>El Rodadero</Accordion.Header>
            <Accordion.Body>
            <Image src="img/El_Rodadero.jpg" fluid/><br/>
              {t("location.elro.main")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Santa Marta {t("location.sant.santa")}</Accordion.Header>
            <Accordion.Body>
              <Image src="img/santamarta1.png" fluid/><br/>
              {t("location.sant.main")}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>  
    );
  }
  export default Location;

