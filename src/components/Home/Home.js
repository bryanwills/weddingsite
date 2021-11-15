import React from 'react'
import './Home.css';
import {Countdown} from '../Countdown/Countdown';

export class Home extends React.Component {
  
  render() {
    return (
      <div>
          <div>
              <Countdown/>
              <span>
                <p>Ceremony: <a href="https://mamancana.co/en/">Mamancana</a> 04:00pm</p>
                <p>Reception: <a href="https://mamancana.co/en/">Mamancana</a> 06:00pm</p>
              </span>
          </div>
          <div id="main">
          The day has finally come to cordially invite our family and friends to our wedding ceremony and celebration of love. 
          We truly wish that both sides of our family and friends can unite and share this special moment with us. 
          We know that the journey may be far, but we believe that a good vacation is needed and deserved by everyone after 
          these crazy times we have been living through. We will take all the necessary precautions during this pandemic, and 
          hopefully this celebration of love can bring everyone together after being apart for so long. 
          </div>
          </div>
      )
  }
}