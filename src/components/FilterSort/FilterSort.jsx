/**
 * Created by Chris Dorward on 03/03/2017
 * components/FilterSort/FilterSort
 */

import React from 'react';
import { Badge, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './FilterSort.scss';

function FilterSort(props) {
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  const statesArr = [];
  const key = 0;
  statesArr.push(
    <MenuItem
      key={key}
      eventKey="texas"
      >texas</MenuItem>
  );
  return (
    <div className="filter-sort container">
      <h4>Showing <Badge
        className="badge-success">{props.eventData.length}</Badge> Events</h4>
      <div className="filter-dds">
        <DropdownButton
          bsStyle="default"
          title="Only show events in..."
          id="filter-state"
          className="filter-dd">
          {statesArr}
        </DropdownButton>
        <DropdownButton
          bsStyle="default"
          title="Order by..."
          id="sort-by"
          className="sort-dd">
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
