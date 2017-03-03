/**
 * Created by Chris Dorward on 03/03/2017
 * containers/Root
 */

import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import routes from '../utils/routes';

const Root = ({ history }) => (
    <Router history={history} routes={routes} />
);

Root.propTypes = {
  history: PropTypes.any.isRequired
};

export default Root;
