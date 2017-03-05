/* global cms */
/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventDetail/EventDetail
 */

import React from 'react';
import { Panel, Grid, Col, Row } from 'react-bootstrap';

import './EventDetail.scss';

function EventDetail() {
  let content = null;
  if (cms.currentEvent !== undefined) {
    const detailData = cms.currentEvent;
    const images = detailData.images || '';
    let img = null;
    if (images.large !== undefined) {
      img = (<img
        alt="Selected Event Title"
        src={images.large || '/img/event_images/large.jpg'}
        className="img-responsive detail-img"
      />);
    }
    content = (
      <Panel>
        <h3>{detailData.name || 'Event Name'}</h3>
        <div id="event-map" className="current-map panel" />
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={4} className="about-right">
              <div className="event-detail-item">
                {img}
                <p><strong>{detailData.price}</strong></p>
                {detailData.description}
              </div>
            </Col>
            <Col sm={12} md={8} className="about-left">
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
            </Col>
          </Row>
        </Grid>
      </Panel>
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
