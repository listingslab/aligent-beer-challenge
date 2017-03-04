/**
 * Created by Chris Dorward on 03/03/2017
 * components/EventList/EventList
 */

import React from 'react';
import { DropdownButton, MenuItem, Panel } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
//
import './EventList.scss';

function EventList() {
  // console.log(props);
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  return (
    <div className="event-list container">
      <h3>Event List</h3>
    </div>
  );
}

export default EventList;
