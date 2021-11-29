import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';

 const Rsvp = () => {
    const { t } = useTranslation();
    return (
        <div className="designsection" id="rsvp">
            <Card>
            <div className="textcontent">
            <Card.Body>
                <Card.Title>{t("rsvp.main")}</Card.Title>
                <Card.Text>
                {t("rsvp.secondary")}
                <br/>
                <br/>
                {t("rsvp.wedding_planner_info")}
                </Card.Text>
                <Card.Link><a href="mailto:karina@verdementa.com.co?subject=Maria Del Mar y Robert Edward Burton Boda"><img src="img/mail.png" height="30" alt="EMail"/>Karina Avendaño</a>.</Card.Link><br/>
                <Card.Link><a href="https://api.whatsapp.com/send?phone=573152199077"><img src="img/WhatsApp-clear.png" height="50" alt="WhatsApp Logo"/>+57 315 219 9077</a></Card.Link>
                {/* <Card.Img variant="top" src="img/Pets_Black.png" width="90px"/> */}
            </Card.Body>
            </div>
            </Card>
        </div>
      );
  };
  export default Rsvp;


