import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import CardContent from '@mui/material/CardContent';

const AboutUs = () => {
  const { t } = useTranslation();
    return (
      <div className="" id="aboutus">
          <div className="">
          <Card.Body>
            <Card.Title>{t("about_us.title")}</Card.Title>
            <br/>
            <Card raised className="dress-main-card">
              <CardContent>
              {t("about_us.main2")}
              <br/>
              <br/>
                <img
                  src='img/robmaria2.png'
                  alt="beer"
                  className="dress-img"
                />
                <img
                  src='img/robMaria3.png'
                  alt="beer"
                  className="dress-img"
                />
                <br/><br/>
                {t("about_us.main3")}
                <br/><br/>
                <img
                  src='img/robMaria4.png'
                  alt="beer"
                  className="dress-img"
                />
                <img
                  src='img/RobMaria5.JPG'
                  alt="beer"
                  className="dress-img"
                />
                <br/>
                <br/>
                {t("about_us.main4")}<br/>
                <br/>
                <img
                  src='img/robMaria6.JPG'
                  alt="beer"
                  className="dress-img"
                />
                <br/>
                <br/>
                <Card.Title>{t("about_us.withlove")} </Card.Title>
                  {t("about_us.who")}
              </CardContent>
            </Card>
          </Card.Body>
          </div>
      </div>   
    );
  };
  export default AboutUs;