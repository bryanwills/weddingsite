import React from "react";
import "./Dresscode.css";
import { useTranslation } from 'react-i18next';

const DressCode = () => {
  const { t } = useTranslation();
    return (
      <div className="section" id="aboutUs">
        <div id="content">
        {t("dress_code.main")}
        </div>
        <div id="brideandgroom">
          <div id="bride">
            <img alt=""
              src="/img/white1.png"
            />
          </div>
          <div id="groom">
            <img alt=""
              src="/img/white2.png"
            />
          </div>
          <div id="bride">
            <img alt=""
              src="/img/white3.png"
            />
          </div>
        </div>
        <div id="brideandgroom">
          <div id="groom">
            <img alt=""
              src="/img/white4.png"
            />
          </div>
          <div id="bride">
            <img alt=""
              src="/img/white5.png"
            />
          </div>
          <div id="groom">
            <img alt=""
              src="/img/white6.png"
            />
          </div>
        </div>
      </div>
    );
  }
  export default DressCode;