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
            <Col sm={12} md={4} className="about-right">
              <h2>Aligent Craft<br />Beer Challenge</h2>

                <ul>
                    <li>Loading JSON from a remote RestFUL API Using a PHP proxy</li>
                    <li>Rendering to browser using Bootstrap / CSS3 / Sass / HTML5 etc</li>
                </ul>

                <Button
                  className="btn btn-lg text-center"
                  bsStyle="success"
                  onClick={() => newRoute('/events')}
                >LIVE DEMO</Button>
            </Col>
            <Col sm={12} md={8} className="about-left">
              <h3>Every app has a story, what&apos;s this one&apos;s?</h3>

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

                <h3>Let&apos;s break that down to an Agile User Story.</h3>
                <blockquote>
                  <p>&quot;As a user I want to be able to be able to find a craft-beer related
                    event (festival, tasting... whatever)
                    somewhere interesting in the United States to attend this year.&quot;</p>
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
