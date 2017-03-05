/* global cms */
/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventList/EventList
 */

import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';


import './EventListItem.scss';

function EventListItem(props) {
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  const thisClicked = (item) => {
    cms.currentEvent = item;
    browserHistory.push(`/event/${item.id}`);
  };
  const nameLength = 38;
  let shortName = props.eventData.name.substring(0, nameLength);
  if (shortName.length - nameLength === 0) {
    shortName = `${shortName}...`;
  }
  return (
    <Button
      className="event-list-item event-list-detail"
      bsStyle="success"
      onClick={() => thisClicked(props.eventData)}
    >
      {shortName}
    </Button>
  );
}

export default EventListItem;

/*

<div><em>What?</em> {props.eventData.typeDisplay}</div>
<div><em>When?</em> {props.eventData.time}, {props.eventData.startDate}</div>

<div><em>Where?</em> {props.eventData.venueName},
{props.eventData.streetAddress},
{props.eventData.locality},
{props.eventData.region}</div>
*/
