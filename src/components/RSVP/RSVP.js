import React from "react";
import "./RSVP.css";
import { useTranslation } from 'react-i18next';

 const Rsvp = () => {
    const { t } = useTranslation();
    return (
        <div className="section" id="rsvp">
            <h2>{t("rsvp.main")}</h2>
                  <br/>
                  {t("rsvp.secondary")}
                  <br/>
                  {t("rsvp.wedding_planner_info")}
                  <address>
                  Karina Avendaño <a href="mailto:karina@verdementa.com.co?subject=Maria Del Mar y Robert Edward Burton Boda">Karina Avendaño</a>.
                  </address>
                  <img src="img/WhatsApp-clear.png" height="50" alt="WhatsApp Logo"/> +57 315 219 9077
                   <br/>
        </div>
      );
  }
  export default Rsvp;


