/* global cms */
/**
 * Created by Chris Dorward on 20/01/2017
 * containers/App
 */

import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import API from '../utils/API';

class App extends Component {

  constructor(props) {
    super(props);
    cms = new API();
    this.state = {
      eventsLoaded: false
    };
  }

  render() {
    const { children } = this.props;
    return (
      <div id="app">
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default App;
