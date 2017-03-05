/* global cms */
/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventDetail/EventDetail
 */

import React from 'react';
import { PageHeader, Well, Panel, Grid, Col, Row } from 'react-bootstrap';

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
        src={images.icon || ''}
        className="img-responsive detail-img"
      />);
    }
    content = (
      <div>
        <PageHeader>{detailData.name || 'Event Name'}</PageHeader>
        <Grid>
          <Row className="show-grid">

            <Col sm={12} md={3} >
              {img}
              <h4>What?</h4>
                {detailData.typeDisplay}
              <h4>When?</h4>
                {detailData.time}, {detailData.startDate}
              <h4>Where?</h4>
                {detailData.venueName}<br />
                {detailData.streetAddress}<br />
                {detailData.locality}<br />
                {detailData.region}
            </Col>

            <Col sm={12} md={6}>
              <div id="event-map" className="current-map panel" />
              <div className="event-detail-item">
                <h5>{detailData.price}</h5>
                {detailData.description}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  } else {
    content = (null);
  }

  return (
    <div id="detail" className="event-detail">
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
