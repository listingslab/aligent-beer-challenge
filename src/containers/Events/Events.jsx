/* global cms */
/**
 * Created by Chris Dorward on 3/03/2017
 * containers/Events/Events
 */

import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import { Panel, Grid, Col, Row } from 'react-bootstrap';
import './Events.scss';

class Events extends Component {

  constructor(props) {
    super(props);
    if (cms.eventsData === undefined) {
      cms.getEvents(this.apiEventsCallback.bind(this));
      this.state = {
        eventsLoaded: false
      };
    } else {
      this.state = {
        eventsLoaded: true
      };
    }
  }

  componentDidMount() {
    if (this.state.eventsLoaded) {
      this.renderMap();
    }
  }

  componentDidUpdate() {
    if (this.state.eventsLoaded) {
      this.renderMap();
    }
  }

  apiEventsCallback(eventsData) {
    cms.eventsData = eventsData;
    this.setState({
      eventsLoaded: true,
      eventsData
    });
  }

  renderMap() {
    const map = new google.maps.Map(document.getElementById('event-map'), {});
    const latlngbounds = new google.maps.LatLngBounds();
    for (let i = 0; i < this.eventsArr.length; i += 1) {
      if (this.eventsArr[i].countryIsoCode === 'US') {

        const images = this.eventsArr[i].images || '';
        const icon = images.icon || '/img/no-image.png';
        console.log(icon);
        const place = { lat: this.eventsArr[i].latitude, lng: this.eventsArr[i].longitude };
        const marker = new google.maps.Marker({
          position: place,
          map
        });
        latlngbounds.extend(marker.position);
      }
    }
    map.setCenter(latlngbounds.getCenter());
    map.fitBounds(latlngbounds);
  }

  render() {
    let content = null;
    if (!this.state.eventsLoaded) {
      content = (
        <div className="container text-center">
          <Loader loadingText="Loading Events..." />
        </div>
      );
    } else {
      this.eventsArr = cms.eventsData.contents.data;
      const eventsPanels = [];
      for (let i = 0; i < this.eventsArr.length; i += 1) {
        if (this.eventsArr[i].countryIsoCode === 'US') {
          const key = `event_${i}`;
          eventsPanels.push(
            <Col key={key} sm={12} md={6}>
              <Panel className="event-panel">
                <h5>{this.eventsArr[i].name}</h5>
              </Panel>
            </Col>
          );
        }
      }
      content = (
        <div className="container">
          <div className="container">
            <div id="event-map" className="panel">
              map
            </div>
          </div>
          <Grid>
            <Row className="show-grid">
              {eventsPanels}
            </Row>
          </Grid>
        </div>
      );
    }

    return (
      <div className="events">
        {content}
      </div>
    );
  }
}

export default Events;
