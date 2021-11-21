import React from 'react'
import './Home.css';
import Countdown from '../Countdown/Countdown';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <br/>
      <div>
          <div>
              <Countdown/>
              <span>
                <p>{t("home.ceremony")}: <a href="https://mamancana.co/en/">Mamancana</a> 04:00pm</p>
                <p>{t("home.reception")}: <a href="https://mamancana.co/en/">Mamancana</a> 06:00pm</p>
              </span>
          </div>
          <div id="main">
          {t("home.main")}
          </div>
          </div>
      )
    </div>
  );
};
export default Home;