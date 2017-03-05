/* global cms */
/**
 * Created by Chris Dorward on 3/03/2017
 * containers/Events/Events
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
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
    this.eventsArr = eventsData.contents.data;
    cms.eventsData = eventsData;
    this.setState({
      eventsLoaded: true,
      eventsData
    });
  }

  sortAndFilter() {
    const allData = cms.eventsData.contents.data;
    let filteredData = [];
    if (cms.selectedState !== undefined) {
      for (let i = 0; i < allData.length; i += 1) {
        if (cms.selectedState === allData[i].region) {
          filteredData.push(allData[i]);
        }
      }
    } else {
      filteredData = allData;
    }
    return filteredData;
  }

  renderMap() {
    const map = new google.maps.Map(document.getElementById('event-map'), {
      styles: [
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                  "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#545454"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "-87"
                },
                {
                    "lightness": "-40"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f0f0f0"
                },
                {
                    "saturation": "-22"
                },
                {
                    "lightness": "-16"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "-52"
                },
                {
                    "hue": "#00e4ff"
                },
                {
                    "lightness": "-16"
                }
            ]
        }
    ]
    });
    let eventsArr = this.sortAndFilter();
    if (cms.currentEvent !== undefined){
      eventsArr = [cms.currentEvent];
    }
    const latlngbounds = new google.maps.LatLngBounds();
    for (let i = 0; i < eventsArr.length; i += 1) {
      if (eventsArr[i].countryIsoCode === 'US') {
        const images = eventsArr[i].images || '';
        const icon = '/img/googlemap.png';
        const place = { lat: eventsArr[i].latitude, lng: eventsArr[i].longitude };
        const marker = new google.maps.Marker({
          position: place,
          icon,
          map
        });
        latlngbounds.extend(marker.position);
      }
    }
    map.setCenter(latlngbounds.getCenter());
    map.fitBounds(latlngbounds);
  }

  render() {
    let loader = null;
    let gridContent = null;
    let mapDiv = null;
    if (cms.currentEvent === undefined){
      mapDiv = (
        <div>
          <div id="event-map" className="panel no-current-map" />
        </div>
      );
    }
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
            <Col sm={12} md={2} className="left-col">
              <FilterSort
                eventData={cms.eventsData.contents.data}
                filteredNum={this.sortAndFilter().length}
              />
              <div className="scrollable-events">
                <EventList
                  eventData={this.sortAndFilter()}
                />
              </div>
            </Col>
            <Col sm={12} mdOffset={1} md={9} className="right-col">
              {mapDiv}
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
