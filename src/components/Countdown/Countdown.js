import React from "react";
import { useTranslation } from 'react-i18next';

const Countdown = () => {
  const { t } = useTranslation();
  
  const currentTime = new Date();
  const weddingTime = new Date(2022, 11, 28, 16, 0);
  const timeUntil = weddingTime - currentTime;
  const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
  return (
        <div id="main">
          <br/>
          <br/>
        <div className="countdowntitle">
          {days} {t("countdown.days")}<br/>
        </div>
          <br/>
          <span id="until"> {t("countdown.until")} </span>
          <span id="ido">{t("countdown.announce")}</span><br/>
          <span id="ido">{t("countdown.date")}!</span>
      </div>
    );
}
export default Countdown;





