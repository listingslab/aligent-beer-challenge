/**
 * Created by Chris Dorward on 3/03/2017
 * templates/Beers/Beers
 */

import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Beers.scss';

class Beers extends Component {

  render() {
    return (
      <div className="beers container">
        <Jumbotron>
          <h1>Beers</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Beers;
