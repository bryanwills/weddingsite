import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import CardContent from '@mui/material/CardContent';

const DressCode = () => {
  const { t } = useTranslation();
    return (
      <div className="" id="dresscode">
          <div className="bg-text-dress">
            <Card.Title>{t("dress_code.main")} <a href="https://en.wikipedia.org/wiki/D%C3%AEner_en_Blanc">{t("dress_code.din_blanc_link")}</a>{t("dress_code.meets")}<a href="https://en.wikipedia.org/wiki/Guayabera">{t("dress_code.guay_link")}</a></Card.Title>
            <br/>
            <Card raised className="dress-main-card">
              <CardContent>
                <img
                  src='img/white1.png'
                  alt="white1"
                  className="dress-img"
                />
                <img
                  src='img/white2.png'
                  alt="white2"
                  className="dress-img"
                />
                <img
                  src='img/white3.png'
                  alt="white3"
                  className="dress-img"
                />
                <img
                  src='img/white4.png'
                  alt="white4"
                  className="dress-img"
                />
                <img
                  src='img/white5.png'
                  alt="white5"
                  className="dress-img"
                />
                <img
                  src='img/white6.png'
                  alt="white6"
                  className="dress-img"
                />
              </CardContent>
            </Card>
          </div>
      </div>   
    );
  };
  export default DressCode;