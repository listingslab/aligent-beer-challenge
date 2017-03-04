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
        <h1>About this software</h1>

          

          <h3>Tech Stack</h3>
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
