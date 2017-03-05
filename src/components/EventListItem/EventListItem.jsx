/* global cms */
/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventList/EventList
 */

import React from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import { browserHistory } from 'react-router';

import './EventListItem.scss';

function EventListItem(props) {
  let className = 'event-list-item event-list-detail';
  if (cms.currentEvent !== undefined) {
    if (cms.currentEvent.id === props.eventData.id){
      console.log('currentEvent');
      className = `${className} active`;
    }
  }
  const thisClicked = (item) => {
    cms.currentEvent = item;
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    browserHistory.push(`/event/${item.id}`);
  };
  const nameLength = 28;
  let shortName = props.eventData.name.substring(0, nameLength);
  if (shortName.length - nameLength === 0) {
    shortName = `${shortName}...`;
  }
  return (
    <Button
      className={className}
      bsStyle="primary"
      onClick={() => thisClicked(props.eventData)}
    >
      <strong>{shortName}</strong>
      <br />
        {props.eventData.locality},
        {props.eventData.region}
    </Button>
  );
}

export default EventListItem;

/*
<div><em>What?</em> {props.eventData.typeDisplay}</div>
<div><em>When?</em> {props.eventData.time}, {props.eventData.startDate}</div>
<div><em>Where?</em> {props.eventData.venueName},
{props.eventData.streetAddress},

{props.eventData.typeDisplay}
</div>
*/
