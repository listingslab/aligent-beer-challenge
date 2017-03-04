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
      <h3>Sort/Only show</h3>
        <div className="filter">
          <DropdownButton
            bsStyle="primary"
            title="Only show US State..."
            id="filter-state"
            className="filter-sort-dd">
            <MenuItem eventKey="texas">texas</MenuItem>
            <MenuItem eventKey="new-england">new-england</MenuItem>
            <MenuItem eventKey="california">california</MenuItem>
          </DropdownButton>
          <br />Showing: <strong>All</strong>
        </div>
        <div className="sort">
          <DropdownButton
            bsStyle="primary"
            title="Sort by..."
            id="sort-by"
            className="filter-sort-dd">
            <MenuItem eventKey="sort-price">Price</MenuItem>
            <MenuItem eventKey="sort-name">Name</MenuItem>
          </DropdownButton>
          <br />Sorted by: <strong>Name</strong>
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
