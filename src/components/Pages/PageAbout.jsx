/**
 * Created by Chris Dorward on 03/03/2017
 * components/PageAbout/PageAbout
 */

import React from 'react';
import { Panel, Grid, Col, Row, Jumbotron, Button } from 'react-bootstrap';

function PageAbout(props) {
  return (
    <div className="page-about container">
      <Jumbotron>
        <h2>About this software</h2>
        <p>Starting off with some boilerplate code we set up a new project. We've been using
        Facebook's React JS a lot recently, so used that as our front-end JavaScript framework.</p>
        <h4>Development Technology Stack</h4>
          <ul>
            <li>React JS</li>
            <li>Webpack</li>
            <li>Apache</li>
            <li>PHP</li>
            <li>HTML 5</li>
            <li>CSS3/SASS</li>
          </ul>


      </Jumbotron>

    </div>
  );
}

export default PageAbout;
