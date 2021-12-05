import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import Image from 'react-bootstrap/Image'
import { Card } from 'react-bootstrap';

  const Faq = () => {
    const { t } = useTranslation();
    return (
      <div className="" id="faq">
        <div className="bg-text">
        <Card.Body>
          <Card.Text>
          <div className="header">
            <h1 >{t("faq.gen")}</h1>
            <Image src="/img/santamarta.png" fluid/>
          </div>
          <div className="lefted">
            <br/>
            <br/><h3>{t("faq.q1")}</h3>
            {t("faq.a1")}<br/>
            <br/><h3>{t("faq.q2")}</h3>
            <Trans i18nKey="faq.a2" t={t} components={[<a href="https://www.avianca.com/" target="_blank" rel="noreferrer"/>,<a href="https://www.despegar.com.co/" target="_blank" rel="noreferrer"/>]} /><br/>
            <br/><h3>{t("faq.q3")}</h3>
            {t("faq.a3")}<br/>
            <br/><h3>{t("faq.q4")}</h3>
            {t("faq.a4")}<br/>
            <br/><h3>{t("faq.q5")}</h3>
            <Trans i18nKey="faq.a5" t={t} components={[<a href="https://www.oanda.com/currency-converter" target="_blank" rel="noreferrer"/>]} /><br/>
            <br/><h3>{t("faq.q6")}</h3>
            {t("faq.a6")}<br/>
            <br/><h3>{t("faq.q7")}</h3>
            {t("faq.a7")}<br/>
            <br/><h3>{t("faq.q8")}</h3>
            {t("faq.a8")}<br/>
            <br/>
          </div>
          <hr/>
          <div className="header">
              <h1>{t("faq.wed")}</h1>
              <Image src="/img/mamancana.png" fluid/>
            </div>
          <div className="lefted">
            <br/><h3>{t("faq.q9")}</h3>
            {t("faq.a9")}<br/>
            <br/><h3>{t("faq.q10")}</h3>
            {t("faq.a10")}<br/>
            <br/><h3>{t("faq.q11")}</h3>
            {t("faq.a11")}<br/>
            <br/><h3>{t("faq.q12")}</h3>
            {t("faq.a12")}<br/>
            <br/><h3>{t("faq.q13")}</h3>
            {t("faq.a13")}<br/>
            <br/>
            </div>
          </Card.Text>
        </Card.Body>
        </div>
    </div>
    );
  };
  export default Faq;