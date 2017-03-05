/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventList/EventList
 */

import React from 'react';
import { DropdownButton, MenuItem, Panel, Badge } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import EventListItem from '../../components/EventListItem/EventListItem';

import './EventList.scss';

function EventList(props) {
  console.log(props.eventItemClicked);
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  const eventItems = [];
  // props.eventData.length
  for (let i = 0; i < 12; i += 1){
    const key = `event_${i}`;
    eventItems.push(
      <EventListItem
        key={key}
        eventData={props.eventData[i] || {}}
        eventItemClicked={props.eventItemClicked || {}}
      />
    );
  }
  return (
    <div className="event-list container">

      {eventItems}
    </div>
  );
}

export default EventList;
