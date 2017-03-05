/**
 * Created by Chris Dorward on 3/03/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import { Panel, Grid, Col, Row, Jumbotron, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import './Home.scss';

class Home extends Component {

  render() {
    const newRoute = (route) => {
      browserHistory.push(route);
    };
    return (
      <div className="home container">

        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={5} className="about-right">
              <h3>Aligent Craft Beer Challenge</h3>
                <img
                  alt="Aligent Craft Beer Challenge"
                  src="/img/aligent-beer-challenge.png"
                  className="home-logo pull-left"
                  />
                <ul>
                    <li>Loading JSON from a remote RestFUL API Using a PHP proxy</li>
                    <li>Rendering a React JS Single page application to browser
                      using Bootstrap / CSS3 / Sass / HTML5 etc</li>
                </ul>

                <Button
                  className="btn text-center"
                  bsStyle="default"
                  onClick={() => newRoute('/about')}
                >FIND OUT MORE</Button>
              &nbsp;
                <Button
                  className="btn text-center"
                  bsStyle="primary"
                  onClick={() => newRoute('/events')}
                >LIVE DEMO</Button>

            </Col>
            <Col sm={12} md={7} className="about-left">
              <h3>&nbsp;</h3>
              <h4>Every app has a story, what&apos;s this one&apos;s?</h4>

                <blockquote>
                  <p>
                  <a
                    href="http://www.brewerydb.com/developers/docs-endpoint/beer_index"
                    target="_blank"
                  >BreweryDB</a> has a simple API that returns JSON.
                  We would like you to use HTML, CSS and Javascript to read the API
                  and display it in an organized way. In addition, you should add in
                  some sort of sorting mechanic to the front-end. Feel free to use any
                  frameworks you would like to achieve the task.</p>
                </blockquote>

                <h4>Break it down to an Agile User Story</h4>
                <blockquote>
                  <p>&quot;As a user I want to be able to be able to find a craft-beer related
                    event (festival, tasting... whatever)
                    somewhere interesting in the United States to attend.&quot;</p>
                </blockquote>
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;

/*
<Button
  className="btn-lg pull-right"
  bsStyle="default"
  onClick={() => newRoute ('/events')}
>CRAFT BEER EVENTS</Button>
*/
