/**
 * Created by Chris Dorward on 03/03/2017
 * components/Footer/Footer
 */

import React from 'react';
import { Nav, NavDropdown, MenuItem, Button, FormGroup, FormControl, Panel, Grid, Col, Row, Jumbotron } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
//
import './Footer.scss';

function Footer(props) {
  // console.log(props);
  const newRoute = (route) => {
    browserHistory.push(route);
  };
  return (
    <div className="footer container">

      <Col sm={12} md={4}>
        <Panel className="event-panel">
          <h5>Find out more</h5>
          <Nav onSelect={newRoute}>
            <NavDropdown title="Open Source" id="nav-dropdown-more">
              <MenuItem eventKey={'work/github'}>GitHub</MenuItem>
            </NavDropdown>
            <NavDropdown title="Work" id="nav-dropdown-huawei">
              <MenuItem eventKey={'work/huawei'}>Huawei</MenuItem>
              <MenuItem eventKey={'work/cancer-council'}>Cancer Council</MenuItem>
            </NavDropdown>

            <NavDropdown title="listingslab" id="nav-dropdown-listingslab">
              <MenuItem eventKey={'work/listingslab'}>What is listingslab?</MenuItem>
            </NavDropdown>
          </Nav>

        </Panel>
      </Col>
    </div>
  );
}

export default Footer;
