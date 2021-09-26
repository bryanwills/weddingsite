import React from 'react'
import './Home.css';

export class Home extends React.Component {
  
  render() {
    var backgroundStyle = {
      position: 'absolute', 
      top: '28%', //CAN'T HAVE THIS AND FLOATING UNDER MENU
      // bottom: '35%',
      left: '15%',
      right: '15%',
      background: 'rgb(204, 204, 204)', /* Fallback for older browsers without RGBA-support */
      background: 'rgba(204, 204, 204, 0.75)',
      padding: '15px'
    };
    var quoteStyle= {
      // TODO - COME BACK TO THIS 
    }; 

    return (
      <div>
          <div>
            {/* <div style={backgroundStyle}> */}
              <h3 style={quoteStyle}>'Maria & Rob'</h3>
              {/* </div>       */}
          </div>
        </div>
      )
  }
}