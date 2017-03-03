/**
 * Created by Chris Dorward on 01/03/2017
 * Routes
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute />
      <Route path="*" />
    </Route>
  </Router>
);

export default routes;
