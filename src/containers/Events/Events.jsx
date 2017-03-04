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
    this.eventsArr = eventsData.contents.data;
    cms.eventsData = eventsData;
    this.setState({
      eventsLoaded: true,
      eventsData
    });
  }

  sortAndFilter() {
    return [];
  }

  render() {
    const newRoute = (route) => {
      browserHistory.push(route);
    };
    let loader = null;
    if (!this.state.eventsLoaded) {
      loader = (
        <div className="container text-center">
          <Loader loadingText="Loading Craft Beer Events ..." />
        </div>
      );
    }

    let eventList = this.sortAndFilter();
    console.log ('The Sorted Array');
    eventList.push (
      <Panel>
        panel
      </Panel>
    );

    return (
      <div className="events">
        <div className="container">
          <div className="row">
          <Grid>
            <Row className="show-grid">
              <Col
                sm={12}
                md={3}
                className="left-col"
              >
                <FilterSort />
              </Col>
              <Col
                sm={12}
                md={9}
                className="right-col"
              >

                <div className="container">
                  <h3>Live demo</h3>
                </div>

              </Col>
            </Row>
          </Grid>
        </div>
        </div>
        {loader}
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
