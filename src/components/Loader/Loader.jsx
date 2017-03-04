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
          alt="Aligent"
          src="/img/aligent-beer-challenge_100.png"
          className="loader-logo"
          height="50"
        />
<p>{props.loadingText}</p>
        <img
          alt="loading"
          src="/img/loader.gif"
        />



    </div>
  );
}

export default Loader;
