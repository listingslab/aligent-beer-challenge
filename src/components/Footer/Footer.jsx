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
  const handleNav = (route) => {
    browserHistory.push(route);
  };

  return (
    <div className="footer">
      <Navbar collapseOnSelect>
        <Navbar.Collapse>
          <Nav onSelect={handleNav}>
            <NavDropdown title="OPEN SOURCE" id="nav-dropdown-more">

                <li><Link
                  href="https://github.com/listingslab/aligent-beer-challenge.git"
                  target="_blank"
                >GitHub => /listingslab/aligent-beer-challenge.git</Link></li>
            </NavDropdown>

            <NavDropdown title="OUR WORK" id="nav-dropdown-huawei">
              <MenuItem eventKey={'work/huawei'}>Huawei</MenuItem>
            </NavDropdown>

            <NavDropdown title="LISTINGSLAB" id="nav-dropdown-listingslab">
              <li><Link
                href="http://listingslab.com/?square-one"
                target="_blank"
              >listingslab.com</Link></li>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Footer;
