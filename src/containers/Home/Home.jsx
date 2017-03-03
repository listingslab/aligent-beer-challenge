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
            <Button
              className="btn-lg pull-right"
              bsStyle="default"
              onClick={() => newRoute ('/events')}
            >CRAFT BEER EVENTS</Button>

          <h2><br />Aligent Beer Challenge</h2>


          <blockquote>
            <p><a href="http://www.brewerydb.com/developers/docs-endpoint/beer_index" target="_blank">BreweryDB</a> has a simple API that returns JSON.
            We would like you to use HTML, CSS and Javascript to read the API
            and display it in an organized way. In addition, you should add in
            some sort of sorting mechanic to the front-end. Feel free to use any
            frameworks you would like to achieve the task.</p>
          </blockquote>
<br />

        <h3>Every user has a story</h3>
        <blockquote>
          <p>As a user I want to be able to be able to find a craft-beer related
            event (festival, tasting... whatever)
            somewhere interesting in the United States to attend this year.</p>
        </blockquote>

<br />
        <h3>Open source on github</h3>


        <a  href="https://github.com/listingslab/aligent-beer-challenge"
          rel='noopener noreferrer'
          target="_blank" >

          <img
            alt="Aligent Beer Challenge"
            src="/img/GitHub-Social-Coding_300.png"
            width="150"
          />

        </a>

        </Jumbotron>
      </div>
    );
  }
}

export default Home;
