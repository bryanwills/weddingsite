import React from "react";
import "./Dresscode.css";
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';

const DressCode = () => {
  const { t } = useTranslation();
    return (
      <div className="section" id="aboutUs">
        <div id="content">
        {t("dress_code.main")}
        </div>
        <div id="brideandgroom">
          <div id="bride">
            <Image alt=""
              src="/img/white1.png" rounded
            />
          </div>
          <div id="groom">
            <Image alt=""
              src="/img/white2.png" rounded
            />
          </div>
          <div id="bride">
            <Image alt=""
              src="/img/white3.png" height="360px" rounded
            /> 
          </div>
        </div>
        <div id="brideandgroom">
          <div id="groom">
            <Image alt=""
              src="/img/white4.png" rounded
            />
          </div>
          <div id="bride">
            <Image alt=""
              src="/img/white5.png" rounded
            />
          </div>
          <div id="groom">
            <Image alt=""
              src="/img/white6.png" rounded
            />
          </div>
        </div>
      </div>
    );
  }
  export default DressCode;