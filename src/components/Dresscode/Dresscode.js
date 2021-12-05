import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import CardContent from '@mui/material/CardContent';

const DressCode = () => {
  const { t } = useTranslation();
    return (
      <div className="" id="dresscode">
          <div className="bg-text">
          <Card.Body>
            <Card.Title>{t("dress_code.main")} <a href="https://en.wikipedia.org/wiki/D%C3%AEner_en_Blanc">{t("dress_code.din_blanc_link")}</a>{t("dress_code.meets")}<a href="https://en.wikipedia.org/wiki/Guayabera">{t("dress_code.guay_link")}</a></Card.Title>
            <br/>
            <Card raised className="dress-main-card">
              <CardContent>
                <img
                  src='img/white1.png'
                  alt="beer"
                  className="dress-img"
                />
                <img
                  src='img/white2.png'
                  alt="beer"
                  className="dress-img"
                />
                <img
                  src='img/white3.png'
                  alt="beer"
                  className="dress-img"
                />
                <img
                  src='img/white4.png'
                  alt="beer"
                  className="dress-img"
                />
                <img
                  src='img/white5.png'
                  alt="beer"
                  className="dress-img"
                />
                <img
                  src='img/white6.png'
                  alt="beer"
                  className="dress-img"
                />
              </CardContent>
            </Card>
          </Card.Body>
          </div>
      </div>   
    );
  };
  export default DressCode;