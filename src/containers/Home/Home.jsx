/**
 * Created by Chris Dorward on 3/03/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './Home.scss';

class Home extends Component {

  render() {
    const newRoute = (route) => {
      browserHistory.push(route);
    };
    return (
      <div className="home container">
        <Jumbotron>

          <h1>Aligent Beer Challenge</h1>
            <img
              alt="Aligent Beer Challenge"
              src="/img/breweryDB_logo_150.png"
            />
          <p>BreweryDB has a simple API that returns JSON.
          We would like you to use HTML, CSS and Javascript to read the API
          and display it in an organized way.</p>

          <p>In addition, you should add in
          some sort of sorting mechanic to the front-end. Feel free to use any
          frameworks you would like to achieve the task.</p>

          <p>
            <Button
              className="btn-lg"
              bsStyle="danger"
              onClick={() => newRoute ('/events')}
            >BROWSE EVENTS</Button></p>

        </Jumbotron>
      </div>
    );
  }
}

export default Home;
