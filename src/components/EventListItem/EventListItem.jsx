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
  const thisClicked = (item, options) => {
    console.log(`ID: ${item.id}`);
    console.log(props.eventData);
  };
  return (
    <Button
      className="event-list-item"
      bsStyle="success"
    >
      <strong>{props.eventData.name}</strong>
      <div
        className="event-list-detail"
        onClick={() => thisClicked(props.eventData)}
      >

      </div>
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
