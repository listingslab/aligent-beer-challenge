/**
 * Created by Chris Dorward on 03/03/2017
 * components/Header/Header
 */

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
//
import './Header.scss';

function Header() {
  // console.log(props);
  const handleNav = (route) => {
    browserHistory.push(route);
  };

  return (
    <div className="header">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/img/aligent-beer-challenge_brand.png"
                alt="Aligent Beer Challenge"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={handleNav}>
            <NavItem eventKey={'/about'}>About this software</NavItem>
            <NavItem eventKey={'/events'}>Craft Beer Events</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

/*

<Navbar.Form pullRight>
  <FormGroup>
    <FormControl type="text" placeholder="Search" />
  </FormGroup>
  {' '}
  <Button type="submit">
    <span className="glyphicon glyphicon-search" aria-hidden="true" />
  </Button>
</Navbar.Form>

<NavItem eventKey={'/beers'}>BEERS</NavItem>
<NavItem eventKey={'/breweries'}>BREWERIES</NavItem>


<NavDropdown title="More..." id="nav-dropdown-more">
  <MenuItem eventKey={'github'}>GitHub</MenuItem>
  <MenuItem eventKey={'other'}>Other</MenuItem>
</NavDropdown>
*/
