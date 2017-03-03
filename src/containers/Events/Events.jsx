/**
 * Created by Chris Dorward on 3/03/2017
 * templates/Events/Events
 */

import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Events.scss';

class Events extends Component {

  render() {
    return (
      <div className="events container">
        <Jumbotron>
          <h1>Events</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Events;
