/* global cms */
/**
 * Created by Chris Dorward on 3/03/2017
 * containers/Events/Events
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Jumbotron, Grid, Row, Col, Panel, Well, DropdownButton, MenuItem } from 'react-bootstrap';
import Loader from '../../components/Loader/Loader';

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
                <h3>Filter or sort events</h3>
                  <p><DropdownButton
                    bsStyle="danger"
                    title="Select State"
                    id="dropdown-state">
                    <MenuItem eventKey="texas">texas</MenuItem>
                    <MenuItem eventKey="new-england">new-england</MenuItem>
                    <MenuItem eventKey="california">california</MenuItem>
                  </DropdownButton>&nbsp;
                  <DropdownButton
                      bsStyle="danger"
                      title="Select Price"
                      id="dropdown-state">
                      <MenuItem eventKey="price-free">FREE</MenuItem>
                      <MenuItem eventKey="price-1-10">$1 - $10</MenuItem>
                      <MenuItem eventKey="price-11-99">$11 - $99</MenuItem>
                      <MenuItem eventKey="price-100plus">$100 +</MenuItem>
                    </DropdownButton>
                  </p>
                  {eventList}
              </Col>
              <Col
                sm={12}
                md={9}
                className="right-col"
              >
                <Jumbotron>
                  <h2>LIVE DEMO</h2>
                </Jumbotron>
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
