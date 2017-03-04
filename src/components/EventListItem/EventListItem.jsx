/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventList/EventList
 */

import React from 'react';
import { DropdownButton, MenuItem, Panel, Badge } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';


import './EventListItem.scss';

function EventListItem(props) {
  //console.log(props.eventData);
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  const eventItemClicked = (item) => {
    console.log(item);
  };
  return (
    <div className="event-list-item">
      <strong>{props.eventData.name}</strong>

      <div
        className="event-list-detail"
        onClick={() => eventItemClicked(props.eventData.id)}
      >

        <div><em>Where?</em> {props.eventData.venueName},
        {props.eventData.streetAddress},
        {props.eventData.locality},
        {props.eventData.region}</div>
      </div>
    </div>
  );
}

export default EventListItem;

/*
<div><em>What?</em> {props.eventData.typeDisplay}</div>
<div><em>When?</em> {props.eventData.time}, {props.eventData.startDate}</div>
*/
