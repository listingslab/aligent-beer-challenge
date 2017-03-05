/* global cms */
/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventDetail/EventDetail
 */

import React from 'react';
import { Panel } from 'react-bootstrap';

import './EventDetail.scss';

function EventDetail() {
  let content = null;
  if (cms.currentEvent !== undefined) {
    const detailData = cms.currentEvent;
    const images = detailData.images || '';
    let img = null;
    if (images.large !== undefined){
      img = (<img
        alt="Selected Event Title"
        src={images.large || '/img/event_images/large.jpg'}
        className="img-responsive detail-img"
      />);
    }
    content = (
      <div>
        <Panel>
          <h3>{detailData.name || 'Event Name'}</h3>
          <div className="detail-left">
            <div className="event-detail-item">
              {img}
              <p><strong>{detailData.price}</strong></p>
              <div id="event-map" className="current-map panel" />
              {detailData.description}
            </div>
          </div>
          <div className="detail-right">
            <h5>What?</h5>
            <blockquote>
              {detailData.typeDisplay}
            </blockquote>
            <h5>When?</h5>
            <blockquote>
              {detailData.time}, {detailData.startDate}
            </blockquote>
            <h5>Where?</h5>
            <blockquote>
              {detailData.venueName}<br />
              {detailData.streetAddress}<br />
              {detailData.locality}<br />
              {detailData.region}
            </blockquote>
          </div>
          <div className="detail-clear" />
            <div className="detail-footer pull-right">
              <a
                href={detailData.website}
                target="_blank"
                rel="noopener noreferrer"
                title={detailData.name}
                className="btn btn-primary"
              >
                <span className="glyphicon glyphicon-globe" aria-hidden="true" />&nbsp;Website
              </a>
            </div>
        </Panel>
      </div>
    );
  } else {
    content = (null);
  }
  return (
    <div className="event-detail">
      {content}
    </div>
  );
}

export default EventDetail;

/*
<strong>id:</strong> {detailData.id}<br />
<strong>latitude:</strong> {detailData.latitude}<br />
<strong>longitude:</strong> {detailData.longitude}<br />
*/
