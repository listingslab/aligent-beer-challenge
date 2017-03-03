/**
 * Created by Chris Dorward on 01/03/2017
 * Routes
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Home from '../containers/Home/Home';
import Events from '../containers/Events/Events';
import Beers from '../containers/Beers/Beers';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/beers" component={Beers} />
      <Route path="*" />
    </Route>
  </Router>
);

export default routes;
