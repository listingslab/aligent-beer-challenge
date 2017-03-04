/**
 * Created by Chris Dorward on 03/03/2017
 * components/FilterSort/FilterSort
 */

import React from 'react';
import { DropdownButton, MenuItem, Panel } from 'react-bootstrap';
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
      <h4>Sort/Show</h4>
        <div className="filter">
          <p>Showing: <strong>All states</strong></p>
          <DropdownButton
            bsStyle="primary"
            title="Only show events in..."
            id="filter-state"
            className="filter-sort-dd">
            <MenuItem eventKey="texas">texas</MenuItem>
            <MenuItem eventKey="new-england">new-england</MenuItem>
            <MenuItem eventKey="california">california</MenuItem>
          </DropdownButton>
          <br />
        </div>
        <div className="sort">
          <DropdownButton
            bsStyle="primary"
            title="Order by..."
            id="sort-by"
            className="filter-sort-dd">
            <MenuItem eventKey="sort-price">Price</MenuItem>
            <MenuItem eventKey="sort-name">Name</MenuItem>
          </DropdownButton>
        </div>
    </div>
  );
}

export default FilterSort;

/*
  <DropdownButton
    bsStyle="danger"
    title="Select Price"
    id="dropdown-state">
    <MenuItem eventKey="price-free">FREE</MenuItem>
    <MenuItem eventKey="price-1-10">$1 - $10</MenuItem>
    <MenuItem eventKey="price-11-99">$11 - $99</MenuItem>
    <MenuItem eventKey="price-100plus">$100 +</MenuItem>
  </DropdownButton>
*/
