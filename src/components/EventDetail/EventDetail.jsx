/**
 * Created by Chris Dorward on 05/03/2017
 * components/EventDetail/EventDetail
 */

import React from 'react';
import { DropdownButton, MenuItem, Panel, Well, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
//
import './EventDetail.scss';

function EventDetail() {
  const detailData =
    {
      id: 'k2jMtH',
      year: '2015',
      name: '6th Annual Beer Carnival',
      description: 'We\'ve ordered the beer, set up the carnival games, secured the rides and pulled in some of our favorite food vendors and food trucks for this Saturday’s event. Step right up and win a prize! There’s plenty of chances to test your skill at a variety of carnival styled midway games and with a little luck you may walk away a winner. Unlimited game play is included with your admission and prizes are available while supplies last. Plus enjoy DJ’s all day and keep your eyes open as we’ll have plenty of other surprises! For those of you that are new to the event – we are glad you are here. We are excited that the weather forecast looks fantastic but we have heaters on standby just in case.',
      type: 'festival',
      typeDisplay: 'Beer Festival',
      startDate: '2015-03-21',
      endDate: '2015-03-21',
      time: 'from 1:00 – 5:00 P.M',
      price: '$30 Early Purchase Special – first 500 tickets / $35 Advance General Admission / $45 Day of Show $50 Early Purchase VIP Special – first 100 tickets / $60 Regular VIP .',
      venueName: 'Atlantic Station',
      streetAddress: '17th Street',
      locality: 'Atlanta',
      region: 'Georgia',
      postalCode: '30363',
      countryIsoCode: 'US',
      latitude: 33.7915512,
      longitude: -84.3946941,
      website: 'http://www.thebeercarnival.com/',
      images: {
        icon: 'https://s3.amazonaws.com/brewerydbapi/event/k2jMtH/upload_A3jnTD-icon.png',
        medium: 'https://s3.amazonaws.com/brewerydbapi/event/k2jMtH/upload_A3jnTD-medium.png',
        large: 'https://s3.amazonaws.com/brewerydbapi/event/k2jMtH/upload_A3jnTD-large.png'
      },
      status: 'verified',
      statusDisplay: 'Verified',
      createDate: '2015-03-26 15:48:01',
      updateDate: '2015-04-28 20:08:11',
      country: {
        isoCode: 'US',
        name: 'UNITED STATES',
        displayName: 'United States',
        isoThree: 'USA',
        numberCode: 840,
        createDate: '2012-01-03 02:41:33'
      }
    };
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  return (
    <div className="event-detail">
      <Panel>
        <div className="detail-links">
          <a
            href={detailData.website}
            target="_blank"
            title={detailData.name}
            className="btn btn-primary"
          >
            <span className="glyphicon glyphicon-globe" aria-hidden="true" />&nbsp;Website
          </a>
        </div>
        <h3>{detailData.name}</h3>
        <div className="detail-left">
          <div className="event-detail-item">


              <img
                alt="Selected Event Title"
                src={detailData.images.large || '/img/event_images/large.jpg'}
                className="img-responsive detail-img"
              />
              <strong>{detailData.price}</strong>
              {detailData.description}
          </div>
        </div>

        <div className="detail-right">
          <h5>What?</h5>
          <blockquote>
            {detailData.typeDisplay}
          </blockquote>

          <h5>When?</h5>
          <blockquote>
            {detailData.time}, {detailData.startDate}
          </blockquote>

          <h5>Where?</h5>
          <blockquote>
            {detailData.venueName}<br />
            {detailData.streetAddress}<br />
            {detailData.locality}<br />
            {detailData.region}
          </blockquote>
        </div>

        <div className="detail-clear" />
          <div className="detail-footer"><br /></div>
      </Panel>
    </div>
  );
}

export default EventDetail;

/*
<strong>id:</strong> {detailData.id}<br />
<strong>latitude:</strong> {detailData.latitude}<br />
<strong>longitude:</strong> {detailData.longitude}<br />
*/
