import React from "react";
// import {Map} from "../Map/Map";
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Location = () => {
  const { t } = useTranslation();
    return (
      <div className="designsectionhuge" id="home">
        <Card>
          <div className="textcontent">
          <Card.Body>
            <div className="header">
              {t("location.main")}<br/>
              <Image src="img/location.png" fluid/><br/>
            </div>
              <Accordion>
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
                <Accordion.Item eventKey="2">
                  <Accordion.Header>El Rodadero</Accordion.Header>
                  <Accordion.Body>
                  <Image src="img/El_Rodadero.jpg" fluid/><br/>
                    {t("location.elro.main")}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Santa Marta {t("location.sant.santa")}</Accordion.Header>
                  <Accordion.Body>
                    <Image src="img/santamarta1.png" fluid/><br/>
                    {t("location.sant.main")}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </div>
        </Card>
    </div>
    );
  };
  export default Location;

