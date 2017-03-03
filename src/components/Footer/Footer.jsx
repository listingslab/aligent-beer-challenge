/**
 * Created by Chris Dorward on 03/03/2017
 * components/Footer/Footer
 */

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, FormGroup, FormControl } from 'react-bootstrap';
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

          <Nav onSelect={newRoute}>
            <NavDropdown title="OPEN SOURCE" id="nav-dropdown-more">
              <MenuItem eventKey={'work/github'}>GitHub</MenuItem>
            </NavDropdown>
            <NavDropdown title="OUR WORK" id="nav-dropdown-huawei">
              <MenuItem eventKey={'work/huawei'}>Huawei</MenuItem>
              <MenuItem eventKey={'work/cancer-council'}>Cancer Council</MenuItem>
            </NavDropdown>

            <NavDropdown title="LISTINGSLAB" id="nav-dropdown-listingslab">
              <MenuItem eventKey={'work/listingslab'}>listingslab</MenuItem>
            </NavDropdown>
          </Nav>
    </div>
  );
}

export default Footer;
