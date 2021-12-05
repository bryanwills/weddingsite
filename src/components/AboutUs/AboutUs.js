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
                    <Card.Title>{t("about_us.withlove")} </Card.Title>
                    {t("about_us.who")}
                    <br/>
                    <br/>
                  </div>
                  <div class="col">
                    <img
                        src='img/RobMaria5.JPG'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <img
                        src='img/robMaria3.png'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                  <div class="col">
                    <img
                        src='img/robMaria6.JPG'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                  <div class="col">
                    <img
                        src='img/robMaria4.png'
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