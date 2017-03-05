/**
 * Created by Chris Dorward on 03/03/2017
 * components/Footer/Footer
 */

import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer container text-center">
      <div className="row">
        <a
          href="https://github.com/listingslab/aligent-beer-challenge"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Aligent Beer Challenge"
            src="/img/GitHub-Social-Coding.png"
            className="git-logo"
            width="60"
          />
      </a>
      <br />
      <small>version 1.1.0, by listingslab</small>
      <br />
      </div>
    </div>
  );
}

export default Footer;

/*
https://listingslab.github.io/aligent-beer-challenge/
*/
