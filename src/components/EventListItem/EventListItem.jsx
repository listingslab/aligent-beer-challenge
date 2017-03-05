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
    console.log(`thisClicked ID: ${item.id}`);
    // console.log(props.eventItemClicked);
  };
  return (
    <Button
      className="event-list-item event-list-detail"
      bsStyle="success"
      onClick={() => thisClicked(props.eventData)}
    >
      {props.eventData.name}
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
