/* global cms */
/**
 * Created by Chris Dorward on 3/03/2017
 * containers/Events/Events
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Jumbotron, Grid, Row, Col, Panel, Well, DropdownButton, MenuItem } from 'react-bootstrap';
import Loader from '../../components/Loader/Loader';
import FilterSort from '../../components/FilterSort/FilterSort';
import EventList from '../../components/EventList/EventList';
import EventDetail from '../../components/EventDetail/EventDetail';

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

  eventItemClicked(param, options) {
    alert(param);
  }

  apiEventsCallback(eventsData) {
    this.eventsArr = eventsData.contents.data;
    cms.eventsData = eventsData;
    this.setState({
      eventsLoaded: true,
      eventsData
    });
  }

  sortAndFilter() {
    return cms.eventsData.contents.data;
  }

  render() {
    const newRoute = (route) => {
      browserHistory.push(route);
    };
    let content = null;
    let loader = null;
    let gridContent = null;
    if (!this.state.eventsLoaded) {
      loader = (
        <div className="container text-center">
          <Loader loadingText="Loading Craft Beer Events ..." />
        </div>
      );
    } else {
      gridContent = (
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={3} className="left-col">
              <FilterSort
                eventData={this.sortAndFilter()}
              />
              <EventList
                eventData={this.sortAndFilter()}
                eventItemClicked={this.eventItemClicked}
              />
            </Col>
            <Col sm={12} mdOffset={1} md={8} className="right-col">
              <EventDetail
                eventData={this.sortAndFilter()}
              />
            </Col>
          </Row>
        </Grid>
      );
    }

    return (
      <div className="events">
        <div className="container">
          <div className="row">
            {loader}
            {gridContent}
          </div>
        </div>
      </div>
    );
  }
}

export default Events;

/*
Only States which have events show up in this dropdown

<Link
  to="/free"
  className="btn btn-success pull-right"
>FREE!</Link>

<span className="pull-right">&nbsp;</span>
  <Button
    className="btn-lg pull-right"
    bsStyle="default"
    onClick={() => newRoute('/')}
  >HOME</Button>
*/
