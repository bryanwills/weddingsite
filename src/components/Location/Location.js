import React from "react";
// import {Map} from "../Map/Map";
import "./Location.css";
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();
    return (
      <div className="location section" id="location">
        {t("location.main")}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bello Horizonte</Accordion.Header>
            <Accordion.Body>
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
              {t("location.pozo.main")}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>El Rodadero</Accordion.Header>
            <Accordion.Body>
              {t("location.elro.main")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Santa Marta (downtown Santa Marta)</Accordion.Header>
            <Accordion.Body>
              {t("location.sant.main")}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>  
    );
  }
  export default Location;

