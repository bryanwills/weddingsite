import React  from "react";
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import Map from '../../components/Map/Map';

const Location = () => {
  const { t } = useTranslation();
    return (
      <div className="" id="home">
          <div className="center">
            <div class="container">
              <div className="row">
                <div className="col">
                  <div className="padding">
                    <div className="">
                      {t("location.main")}<br/>
                      {t("location.main2")}<br/>
                    </div>
                      <Map id="map"/>
                      <br/>
                  </div>
                </div>
                <div className="col-md-auto">
                  locations panels coming soon
                {/* <ul id="locations">
                    <li><b>Bello Horizonte</b><br/><Image src="img/bellohorizante.png" fluid/><br/>    
                      <div className="black">{t("location.belo.main")}</div>
                      <br/>
                      <br/>
                      <div className="black">{t("location.belo.hotel_labels")}<br/></div>
                      <br/>
                      <a href="https://www.zuana.com/">{t("location.belo.zuana")}</a>,<br/>
                      <a href="https://www.irotama.com/">{t("location.belo.irotama")}</a>,<br/>
                      <a href="https://www.marriott.com/hotels/travel/smrmc-santa-marta-marriott-resort-playa-dormida/?gclid=Cj0KCQiAtJeNBhCVARIsANJUJ2EfybDkiPmehueu7lRkMyGxCcaZMXu43Qknnalc0aejwXxzTkuP2o4aAlN3EALw_wcB&gclsrc=aw.ds">{t("location.belo.marriott")}</a>,<br/>
                      <a href="https://planetofhotels.com/en/colombia/santa-marta/apartamento-en-sintana-resort">{t("location.belo.sintana")}</a><br/>
                      <br/>
                    </li>
                    <li><b>Pozos Colorados</b><br/><Image src="img/pozos.png" fluid/><br/><div className="black">{t("location.pozo.main")}</div></li>
                    <li><b>El Rodadero</b><br/><Image src="img/El_Rodadero.jpg" fluid/> <br/> <div className="black">{t("location.elro.main")}</div></li>
                    <li><b>Santa Marta {t("location.sant.santa")}</b><br/><Image src="img/santamarta1.png" fluid/><br/><div className="black">{t("location.sant.main")}</div></li>
                  </ul> */}
                </div>
              </div>
            </div>   
          </div>
    </div>
    );
  };
  export default Location;

