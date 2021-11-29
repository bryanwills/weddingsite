import React from 'react'
import Countdown from '../Countdown/Countdown';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="designsection" id="home">
        <Card>
        <div className="textcontent">
        <Card.Body>
            <Card.Title><Countdown/></Card.Title>
            <Card.Text>
              {t("home.ceremony")}: <a href="https://mamancana.co/en/">Mamancana</a> 4:00pm<br/>
              {t("home.reception")}: <a href="https://mamancana.co/en/">Mamancana</a> 6:00pm
            </Card.Text>
        </Card.Body>
        </div>
        </Card>
    </div>
  );
};
export default Home;