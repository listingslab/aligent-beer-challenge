/**
 * Created by Chris Dorward on 03/03/2017
 * components/PageAbout/PageAbout
 */

import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

function PageAbout() {
  return (
    <div className="page-about container">
      <Grid>
        <Row className="show-grid">
          <Col sm={12} md={8} className="about-right">
            <h3>About this software</h3>
              <p>Starting off with our own Single Page App boilerplate code we set up a new project.
                We&apos;ve been using&nbsp;
                <a href="https://facebook.github.io/react/" target="_blank" rel='noopener noreferrer'>Facebook&apos;s React JS</a>&nbsp;
                a lot recently, so used that as our front-end JavaScript framework. In addition we'll need a&nbsp;
                <a href="https://www.npmjs.com/" target="_blank" rel='noopener noreferrer'>node-driven npm</a> environment to run
                &nbsp;<a href="https://webpack.github.io/" target="_blank" rel='noopener noreferrer'>webpack</a>
                , deal with dependenices and more.&nbsp;
                <a href="http://getbootstrap.com/" target="_blank" rel='noopener noreferrer'>Bootstrap</a> is the CSS foundation. It allows rapid development of responsive, symantically
              sensible HTML5 front ends. The only problem with Boostrap is that all sites made with inspect
              tend to look a little bit samey. So we spiced things up by using a theme from&nbsp;
              <a href="https://bootswatch.com/paper/" target="_blank" rel='noopener noreferrer'>Bootswatch</a>.
              We needed a bit of PHP experience to negotiate the problem of not being able load data cross domain.
            The solution is a simple <a href="https://github.com/listingslab/aligent-beer-challenge/blob/master/public/assets/proxy.php" target="_blank" rel='noopener noreferrer'>PHP proxy</a>.
             Lastly we added some Git magic and make the project Open Source on&nbsp;
                <a href="https://github.com/listingslab/aligent-beer-challenge" target="_blank" rel='noopener noreferrer'>Github</a>.
                  There&apos;s even a <a href="https://github.com/listingslab/aligent-beer-challenge/wiki" target="_blank" rel='noopener noreferrer'>wiki</a> explaining wtf it's all about.</p>
              
          </Col>
          <Col sm={12} md={3} className="about-left">
            <h3>&nbsp;</h3>
            <h4>Tech Stack</h4>
            <ul>
              <li>React JS</li>
              <li>Node, Webpack, npm</li>
              <li>Apache, PHP</li>
              <li>HTML5/CSS3/SASS</li>
            </ul>
          </Col>

        </Row>
      </Grid>
    </div>
  );
}

export default PageAbout;
