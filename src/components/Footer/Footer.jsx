/**
 * Created by Chris Dorward on 03/03/2017
 * components/Footer/Footer
 */

import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer text-center">
        <a
          href="https://listingslab.github.io/aligent-beer-challenge/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Aligent Beer Challenge"
            src="/img/GitHub-Social-Coding.png"
            width="75"
          />
        </a>
    </div>
  );
}

export default Footer;
