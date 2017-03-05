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
    const goBack = () => {
      browserHistory.goBack();
    };
    return (
      <div className="not-found container">
        <Jumbotron>

          <img
            alt="Aligent Beer Challenge"
            src="/img/aligent-beer-challenge.png"
            width="150"
            className="pull-right"
          />

          <h2>Not Found?</h2>
          <p>Damn. that&lsquo;s no good.</p>

            <span className="pull-right">&nbsp;</span>
              <Button
                className="btn-lg"
                bsStyle="success"
                onClick={() => goBack ()}
              >Back</Button>

          &nbsp;
            <span className="pull-right">&nbsp;</span>
            <Button
              className="btn-lg"
              bsStyle="success"
              onClick={() => newRoute ('/')}
            >HOME</Button>

            &nbsp;
          <span className="pull-right">&nbsp;</span>
            <Button
              className="btn-lg"
              bsStyle="success"
              onClick={() => newRoute ('/events')}
            >LIVE DEMO</Button>

        </Jumbotron>
      </div>
    );
  }
}

export default NotFound;
