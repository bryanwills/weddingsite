import React from 'react'
import Countdown from '../Countdown/Countdown';
import AboutUs from '../AboutUs/AboutUs';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="bg-text">
        <img
          alt=""
          src="img/Pets_White_long.png"
          className="imgheader"
        />
        <Countdown/>
        <br/>
        {t("home.ceremony")}<br/>
        04:00pm<br/>
        Mamancana<br/><br/>
        {t("home.reception")}<br/>
        06:00pm<br/>
        Mamancana<br/>
        <br/><br/>
        {t("home.main")}
        <br/><br/>
        <br/>
        <div className="gold">{t("home.covid")}</div>
        <br/>
        <br/>
        <hr/>
        <AboutUs/>              
      </div>
    </div>
  );
};
export default Home;