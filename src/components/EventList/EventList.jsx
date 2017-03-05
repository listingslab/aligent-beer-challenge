/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventList/EventList
 */

import React from 'react';
import EventListItem from '../../components/EventListItem/EventListItem';
import './EventList.scss';

function EventList(props) {
  const eventItems = [];
  for (let i = 0; i < props.eventData.length; i += 1) {
    if (props.eventData[i].countryIsoCode === 'US') {
      const key = `event_${i}`;
      eventItems.push(
        <EventListItem
          key={key}
          eventData={props.eventData[i] || {}}
        />
      );
    }
  }
  return (
    <div className="event-list container">
      {eventItems}
    </div>
  );
}

export default EventList;
