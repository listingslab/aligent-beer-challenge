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
  console.log('Re-rendering the Event List');
  // console.log(props.eventData);
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  const eventItems = [];
  for (let i = 0; i < props.eventData.length; i += 1){
    const key = `event_${i}`;
    eventItems.push(
      <EventListItem
        key={key}
        eventData={props.eventData[i] || {}}
      />
    );
  }

  return (
    <div className="event-list container">
      <h4>Showing <Badge>{props.eventData.length}</Badge> Events</h4>
      {eventItems}
    </div>
  );
}

export default EventList;
