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
    content = (
      <div>
        <Panel>
          <h3>{detailData.name || 'Event Name'}</h3>
          <div className="detail-left">
            <div className="event-detail-item">
                <img
                  alt="Selected Event Title"
                  src={images.large || '/img/event_images/large.jpg'}
                  className="img-responsive detail-img"
                />
                <strong>{detailData.price}</strong>
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
                title={detailData.name}
                className="btn btn-default"
              >
                <span className="glyphicon glyphicon-globe" aria-hidden="true" />&nbsp;Website
              </a>
            </div>
        </Panel>
      </div>
    );
  } else {
    content = (
      <div>NO currentEvent</div>
    );
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
