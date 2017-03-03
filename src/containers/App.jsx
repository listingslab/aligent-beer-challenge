/**
 * Created by Chris Dorward on 20/01/2017
 * containers/App
 */

import React, { Component } from 'react';
import Header from '../components/Header/Header';
import API from '../utils/API';

class App extends Component {

  constructor(props) {
    super(props);
    const api = new API();
    api.getEvents(this.apiEventsCallback.bind(this));
    this.state = {
      eventsLoaded: false
    };
  }

  apiEventsCallback(eventsData) {
    this.setState({
      eventsLoaded: true,
      eventsData
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div id="app">
        <Header />
        {children}
      </div>
    );
  }
}

export default App;
