/**
 * Created by Chris Dorward on 3/03/2017
 * templates/Breweries/Breweries
 */

import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Breweries.scss';

class Breweries extends Component {

  render() {
    return (
      <div className="breweries container">
        <Jumbotron>
          <h1>Breweries</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Breweries;
