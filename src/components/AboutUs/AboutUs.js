import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import CardContent from '@mui/material/CardContent';

const AboutUs = () => {
  const { t } = useTranslation();
    return (
      <div id="parent">

            <Card.Title><h1>{t("about_us.title")}</h1></Card.Title>
            <br/>
             <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="padding">
                      {t("about_us.main2")}
                      <br/>
                      <br/>
                      {t("about_us.main3")}
                      <br/>
                      <br/>
                      {t("about_us.main4")}
                      <br/>
                      <br/>
                      <br/>
                      <Card.Title className="gold">{t("about_us.withlove")} </Card.Title>
                      <div className="gold">{t("about_us.who")}</div>
                      <br/>
                      <br/>
                    </div>
                  </div>
                  <div class="col-md-auto">
                    <img
                        src='img/r&m_engage.JPG'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-auto">
                    <img
                        src='img/r&m_date.jpeg'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                  <div class="col">
                    <img
                        src='img/r&m_laugh.jpeg'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                  <div class="col-md-auto">
                    <img
                        src='img/r&m_vegas.JPG'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                </div>
              </div>
          
      </div>   
    );
  };
  export default AboutUs;