/**
 * Created by Chris Dorward on 03/03/2017
 * components/FilterSort/FilterSort
 */

import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
//
import './FilterSort.scss';

function FilterSort() {
  // console.log(props);
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  return (
    <div className="filter-sort container">
      filter sort
    </div>
  );
}

export default FilterSort;
