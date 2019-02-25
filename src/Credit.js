import React, { Component } from 'react';
import './App.css';


class Credit extends Component {
    
    render() { 
        return ( 

            <div className="credit-card">
    <h1 className="credit-card-title">CREDIT CARD</h1>
    <div className="credit-card-chip" />
    <div className="credit-card-content">
      <div className="credit-card-text">
          <h2 className="credit-card-number">
            7753 3655 5535 1285
          </h2>
          <h2 className=".credit-valid">
            12/50
          </h2>
          <h2 className="credit-holder">
            CARD HOLDER
          </h2>
      </div>
     
    </div>
  </div>

         );
    }
}
 
export default  Credit;