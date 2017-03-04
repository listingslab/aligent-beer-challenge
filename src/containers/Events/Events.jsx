/* global cms */
/**
 * Created by Chris Dorward on 3/03/2017
 * containers/Events/Events
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Jumbotron } from 'react-bootstrap';
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
    cms.eventsData = eventsData;
    this.setState({
      eventsLoaded: true,
      eventsData
    });
  }


  render() {
    const newRoute = (route) => {
      browserHistory.push(route);
    };
    let content = null;
    if (!this.state.eventsLoaded) {
      content = (
        <div className="container text-center">
          <Loader loadingText="Loading Craft Beer Events ..." />
        </div>
      );
    } else {
      content = (
          <div className="container">
          <Jumbotron>
            <h1>LIVE DEMO</h1>
              <blockquote>
                <p>Find a Craft Beer realted event In the United States in 2017. Filter and sort
                  the events shown by things like which State it&apos;s in, whether it is
                  &nbsp;<Link
                    to="/free"
                    className="btn btn-info"
                    >FREE!</Link>
                  <br />or whatever.
                </p>
              </blockquote>
            </Jumbotron>
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

/*
Only States which have events show up in this dropdown

<span className="pull-right">&nbsp;</span>
  <Button
    className="btn-lg pull-right"
    bsStyle="default"
    onClick={() => newRoute('/')}
  >HOME</Button>

*/
