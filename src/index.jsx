/**
 * Created by Chris Dorward on 03/03/2017
 * index.js Application entrypoint
 */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './containers/Root';

render(
  <Root history={browserHistory} />, document.getElementById('root')
);
