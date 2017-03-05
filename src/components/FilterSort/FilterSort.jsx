/* global cms */
/**
 * Created by Chris Dorward on 03/03/2017
 * components/FilterSort/FilterSort
 */

import React from 'react';
import { Badge, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './FilterSort.scss';

function FilterSort(props) {
  const onSelectFunc = (selected) => {
    cms.selectedState = selected;
    browserHistory.push(`/events/${selected.toLowerCase().replace(' ', '-')}`);
  };
  const statesArr = [];
  const uniqueStates = [];
  for (let i = 0; i < props.eventData.length; i += 1) {
    if (props.eventData[i].countryIsoCode === 'US') {
      const key = `state_${i}`;
      let isUnique = true;
      for (let j = 0; j < uniqueStates.length; j += 1) {
        if (uniqueStates[j] === props.eventData[i].region) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        uniqueStates.push(props.eventData[i].region);
        statesArr.push(
          <MenuItem
            key={key}
            eventKey={props.eventData[i].region}
            >{props.eventData[i].region}</MenuItem>
        );
      }
    }
  }

  let filterStateText = 'Only show events in...';
  if (cms.selectedState !== undefined) {
    filterStateText = cms.selectedState;
  }
  return (
    <div className="filter-sort container">
      <h4>Showing <Badge
        className="badge-success">{props.eventData.length}</Badge> Events</h4>
      <div className="filter-dds">
        <DropdownButton
          onSelect={onSelectFunc}
          bsStyle="default"
          title={filterStateText}
          id="filter-state"
          className="filter-dd">
          {statesArr}
        </DropdownButton>
        <DropdownButton
          bsStyle="default"
          title="Order..."
          id="sort-by"
          className="sort-dd">
          <MenuItem eventKey="sort-ascending">Ascending</MenuItem>
          <MenuItem eventKey="sort-decending">Decending</MenuItem>
        </DropdownButton>
      </div>
    </div>
  );
}

export default FilterSort;
