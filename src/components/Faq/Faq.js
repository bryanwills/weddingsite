import React from "react";
import { useTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image'
import { Card } from 'react-bootstrap';

  const Faq = () => {
    const { t } = useTranslation();
    return (
      <div className="designsectionhuge" id="faq">
        <Card>
        <div className="textcontent">
        <Card.Body>
          <Card.Text>
          <div className="header">
          <h1 >{t("faq.gen")}</h1>
          <Image src="/img/santamarta.png" fluid/>
          </div>
            <br/>
            <br/><h3>{t("faq.q1")}</h3>
            {t("faq.a1")}
            <br/><h3>{t("faq.q2")}</h3>
            {t("faq.a2")}
            <br/><h3>{t("faq.q3")}</h3>
            {t("faq.a3")}
            <br/><h3>{t("faq.q4")}</h3>
            {t("faq.a4")}
            <br/><h3>{t("faq.q5")}</h3>
            {t("faq.a5")}
            <br/><h3>{t("faq.q6")}</h3>
            {t("faq.6")}
            <br/><h3>{t("faq.q7")}</h3>
            {t("faq.a7")} 
            <br/><h3>{t("faq.q8")}</h3>
            {t("faq.a8")}
            <br/>
            <hr/>
            <div className="header">
            <h1 className="header">{t("faq.wed")}</h1>
            <Image src="/img/mamancana.png" fluid/>
            </div>
            <br/><h3>{t("faq.q9")}</h3>
            {t("faq.a9")}
            <br/><h3>{t("faq.q10")}</h3>
            {t("faq.a10")}
            <br/><h3>{t("faq.q11")}</h3>
            {t("faq.a11")}
            <br/><h3>{t("faq.q12")}</h3>
            {t("faq.a12")}
            <br/><h3>{t("faq.q13")}</h3>
            {t("faq.a13")}
          </Card.Text>
        </Card.Body>
        </div>
        </Card>
    </div>
    );
  };
  export default Faq;