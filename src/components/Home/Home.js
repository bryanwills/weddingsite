import React from 'react'
import Countdown from '../Countdown/Countdown';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';

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
                    Mamancana<br/><br/>
                    <br/>
                    {t("home.main")}
                    <br/><br/>
                    {t("home.main2")}
                    <br/><br/>
                    {t("home.main3")}
                    <br/><br/>
                    {t("home.main4")}
                    <br/><br/>
                    <div className="signoff">
                    {t("home.withlove")} <br/>
                    <br/>
                    {t("home.who")}
                    </div>                    
      </div>
    </div>
  );
};
export default Home;