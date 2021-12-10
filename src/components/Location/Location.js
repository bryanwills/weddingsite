import React  from "react";
import { Carousel, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import Map from '../../components/Map/Map';

const Location = () => {
  const { t } = useTranslation();
    return (
      <div className="bg-text">
             <div class="container">
                <div class="row align-items-start">
                  <div class="col">
                    <div className="padding">
                      {t("location.main")}<br/>
                      {t("location.main2")}<br/><br/>
                      <Map id="map"/>
                    </div>
                  </div>
                 <br/>
                  <div class="col-md-auto location-blocks">
                    <br/>
                     <h3 className="gold"><b>Pozos Colorados</b></h3>
                     <br/>
                      <div className="">{t("location.pozo.main")}</div>
                      <br/>
                      <img
                        className="d-block w-100 "
                        src="img/pozos.png"
                        alt="Pozos Colorados"
                      />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-auto location-blocks">
                    <h3 className="gold"><b>Bello Horizonte</b></h3><br/>
                    <div className="">{t("location.belo.main")}</div>
                    <br/>
                      <img
                        className="d-block w-100 "
                        src="img/bellohorizante.png"
                        alt="Bello Horizonte"
                      /><br/>
                       <div className="gold">{t("location.belo.hotel_labels")}<br/></div>
                       <br/>
                       <a href="https://www.zuana.com/">{t("location.belo.zuana")}</a>,<br/>
                       <a href="https://www.irotama.com/">{t("location.belo.irotama")}</a>,<br/>
                       <a href="https://www.marriott.com/hotels/travel/smrmc-santa-marta-marriott-resort-playa-dormida/?gclid=Cj0KCQiAtJeNBhCVARIsANJUJ2EfybDkiPmehueu7lRkMyGxCcaZMXu43Qknnalc0aejwXxzTkuP2o4aAlN3EALw_wcB&gclsrc=aw.ds">{t("location.belo.marriott")}</a>,<br/>
                       <a href="https://planetofhotels.com/en/colombia/santa-marta/apartamento-en-sintana-resort">{t("location.belo.sintana")}</a><br/>
                       <br/>
                  </div>
                  <div class="col-md-auto location-blocks">
                     <h3 className="gold"><b>El Rodadero</b></h3><br/>
                      <div className="">{t("location.elro.main")}</div>
                      <br/>
                      <img
                        className="d-block w-100 "
                        src="img/El_Rodadero.jpg"
                        alt="El Rodadero"
                      />
                  </div>
                  
                  <div class="col location-blocks">
                  <h3 className="gold"><b>Santa Marta {t("location.sant.santa")}</b></h3><br/>
                    <div className="">{t("location.sant.main")}</div>
                    <br/>
                      <img
                        className="d-block w-100 "
                        src="img/santamarta1.png"
                        alt="Santa Marta"
                      />
                  </div>
                </div>
              </div>
          
      </div>  
    //   <div className="" id="home">
    //       <div className="center">
    //         <div class="container">
    //           <div className="row">
    //             <div className="col">
    //               {t("location.main")}<br/>
    //               {t("location.main2")}<br/>
    //               <br/>
    //                   <Carousel fade >
                        // <Carousel.Item>
                        //   <img
                        //     className="d-block w-100"
                        //     src="img/bellohorizante.png"
                        //     alt="Bello Horizonte"
                        //   />
                        //   <Carousel.Caption>
                        //     <h3><b>Bello Horizonte</b></h3>
                        //     <div className="small">{t("location.belo.main")}</div>
                        //   </Carousel.Caption>
                        // </Carousel.Item>
    //                     <Carousel.Item>
    //                       <img
    //                         className="d-block w-100"
    //                         src="img/pozos.png"
    //                         alt="Second slide"
    //                       />
    //                       <Carousel.Caption>
    //                         <h3><b>Pozos Colorados</b></h3>
    //                         <p><div className="small">{t("location.pozo.main")}</div></p>
    //                       </Carousel.Caption>
    //                     </Carousel.Item>
    //                     <Carousel.Item>
    //                       <img
    //                         className="d-block w-100"
    //                         src="img/El_Rodadero.jpg"
    //                         alt="Third slide"
    //                       />
    //                       <Carousel.Caption>
    //                         <h3><b>El Rodadero</b></h3>
    //                         <p><div className="small">{t("location.elro.main")}</div></p>
    //                       </Carousel.Caption>
    //                     </Carousel.Item>
    //                     <Carousel.Item>
    //                       <img
    //                         className="d-block w-100"
    //                         src="img/santamarta1.png"
    //                         alt="First slide"
    //                       />
    //                       <Carousel.Caption>
    //                         <h3><b>Santa Marta {t("location.sant.santa")}</b></h3>
    //                         <p><div className="small">{t("location.sant.main")}</div></p>
    //                       </Carousel.Caption>
    //                     </Carousel.Item>
    //                   </Carousel>       
    //                   <br/> 
    //             </div>
    //             <div className="col-md-auto">
    //             <div className="padding">
    //                   <Map id="map"/>
    //                   <br/>
    //                   <div className="black">{t("location.belo.hotel_labels")}<br/></div>
    //                         <br/>
    //                         <a href="https://www.zuana.com/">{t("location.belo.zuana")}</a>,<br/>
    //                         <a href="https://www.irotama.com/">{t("location.belo.irotama")}</a>,<br/>
    //                         <a href="https://www.marriott.com/hotels/travel/smrmc-santa-marta-marriott-resort-playa-dormida/?gclid=Cj0KCQiAtJeNBhCVARIsANJUJ2EfybDkiPmehueu7lRkMyGxCcaZMXu43Qknnalc0aejwXxzTkuP2o4aAlN3EALw_wcB&gclsrc=aw.ds">{t("location.belo.marriott")}</a>,<br/>
    //                         <a href="https://planetofhotels.com/en/colombia/santa-marta/apartamento-en-sintana-resort">{t("location.belo.sintana")}</a><br/>
    //                         <br/>
    //               </div>

    //             {/* <ul id="locations">
    //                 <li><b>Bello Horizonte</b><br/><Image src="img/bellohorizante.png" fluid/><br/>    
    //                   <div className="black">{t("location.belo.main")}</div>
    //                   <br/>
    //                   <br/>
    //                   <div className="black">{t("location.belo.hotel_labels")}<br/></div>
    //                   <br/>
    //                   <a href="https://www.zuana.com/">{t("location.belo.zuana")}</a>,<br/>
    //                   <a href="https://www.irotama.com/">{t("location.belo.irotama")}</a>,<br/>
    //                   <a href="https://www.marriott.com/hotels/travel/smrmc-santa-marta-marriott-resort-playa-dormida/?gclid=Cj0KCQiAtJeNBhCVARIsANJUJ2EfybDkiPmehueu7lRkMyGxCcaZMXu43Qknnalc0aejwXxzTkuP2o4aAlN3EALw_wcB&gclsrc=aw.ds">{t("location.belo.marriott")}</a>,<br/>
    //                   <a href="https://planetofhotels.com/en/colombia/santa-marta/apartamento-en-sintana-resort">{t("location.belo.sintana")}</a><br/>
    //                   <br/>
    //                 </li>
    //                 <li><b>Pozos Colorados</b><br/><Image src="img/pozos.png" fluid/><br/><div className="black">{t("location.pozo.main")}</div></li>
    //                 <li><b>El Rodadero</b><br/><Image src="img/El_Rodadero.jpg" fluid/> <br/> <div className="black">{t("location.elro.main")}</div></li>
    //                 <li><b>Santa Marta {t("location.sant.santa")}</b><br/><Image src="img/santamarta1.png" fluid/><br/><div className="black">{t("location.sant.main")}</div></li>
    //               </ul> */}
    //             </div>
    //           </div>
    //         </div>   
    //       </div>
    // </div>
    );
  };
  export default Location;

