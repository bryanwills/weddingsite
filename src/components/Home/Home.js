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
                    {t("home.ceremony")}:  Mamancana - 4:00pm<br/>
                    {t("home.reception")}: Mamancana - 6:00pm<br/><br/><br/>
                    <br/>
                    {t("home.main")}
                    <br/><br/>
                    {t("home.main2")}
                    <br/>
      </div>
    </div>
    // <div>
    //   <div className="designsectionlarge" id="home">
    //       <Card>
    //       <div className="centered">
    //       <Card.Body>
    //             <div className="bg-text">
    //               <img
    //                 alt=""
    //                 src="img/Pets_White_long.png"
    //                 className="imgheader"
    //               />
    //               <Card.Title><Countdown/></Card.Title>
    //               <br/>
    //               <Card.Text>
    //                 {t("home.ceremony")}: <a href="https://mamancana.co/en/">Mamancana</a> 4:00pm<br/>
    //                 {t("home.reception")}: <a href="https://mamancana.co/en/">Mamancana</a> 6:00pm
    //               </Card.Text>
    //               <br/>
    //               {t("home.main")}
    //               <br/><br/>
    //               {t("home.main2")}
                  
    //             </div>
    //       </Card.Body>
    //       </div>
    //       </Card>
    //   </div>
    // </div>
  );
};
export default Home;