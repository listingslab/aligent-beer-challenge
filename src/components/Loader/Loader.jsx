/**
 * Created by Chris Dorward on 03/03/2017
 * components/Loader/Loader
 */

import React from 'react';
import './Loader.scss';

function Loader(props) {
  return (
    <div className="loader">
      <img
        alt="brewery DB Logo"
        src="/img/breweryDB_logo_150.png"
      />
      <br />
      <img
        alt="loading"
        src="/img/loader.gif"
        className="loader-gif"
      />
      <p>{props.loadingText}</p>
    </div>
  );
}

export default Loader;
