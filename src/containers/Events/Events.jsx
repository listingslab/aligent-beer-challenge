/* global cms */
/**
 * Created by Chris Dorward on 3/03/2017
 * containers/Events/Events
 */

import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import { Panel, Grid, Col, Jumbotron, Row } from 'react-bootstrap';
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

  apiEventsCallback(eventsData) {
    cms.eventsData = eventsData;
    this.setState({
      eventsLoaded: true,
      eventsData
    });
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
      const eventsArr = cms.eventsData.contents.data;
      let eventsPanels = [];
      // console.log(eventsArr);
      for (let i = 0; i < eventsArr.length; i += 1) {
        if (eventsArr[i].countryIsoCode === 'US'){
          const key = `event_${i}`;
          eventsPanels.push (
            <Col
              key={key}
              sm={12}
              md={6}
            >
              <Panel
                className="event-panel"
              >
                <h5>{eventsArr[i].name}</h5>
              </Panel>
            </Col>
          );
        }

      }
      content = (
        <div className="container">
          <div className="container">
            <Jumbotron>
              <h1>Events</h1>
            </Jumbotron>
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
