/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventDetail/EventDetail
 */

import React from 'react';
import { DropdownButton, MenuItem, Panel, Well } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
//
import './EventDetail.scss';

function EventDetail() {
  // console.log(props);
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  return (
    <div className="event-detail">
      <Panel>
        <h3>Selected Event Title</h3>
        <img
          alt="Selected Event Title"
          src="/img/event_images/large.jpg"
          className="detail-img"
        />
        <p>Info line one</p>
        <p>Info line two</p>
        <p>Info line three</p>
        <p>Info line four</p>
        <p>Info line five</p>
      </Panel>
    </div>
  );
}

export default EventDetail;
