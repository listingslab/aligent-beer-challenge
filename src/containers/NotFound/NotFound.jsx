/**
 * Created by Chris Dorward on 3/03/2017
 * containers/NotFound/NotFound
 */

import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './NotFound.scss';

class NotFound extends Component {

  render() {
    const newRoute = (route) => {
      browserHistory.push(route);
    };
    return (
      <div className="not-found container">
        <Jumbotron>

        <span className="pull-right">&nbsp;</span>
          <Button
            className="btn-lg pull-right"
            bsStyle="default"
            onClick={() => newRoute ('/events')}
          >CRAFT BEER EVENTS</Button>

          <span className="pull-right">&nbsp;</span>
          <Button
            className="btn-lg pull-right"
            bsStyle="default"
            onClick={() => newRoute ('/')}
          >HOME</Button>

          <h2>Not Found?</h2>
          <p>Damn. that&lsquo;s no good.</p>
          <img
            alt="Aligent Beer Challenge"
            src="/img/aligent-beer-challenge.png"
            width="150"
          />

        </Jumbotron>
      </div>
    );
  }
}

export default NotFound;
