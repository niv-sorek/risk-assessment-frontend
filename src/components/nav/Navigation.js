import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GrShieldSecurity } from 'react-icons/gr';
import { NavLink } from 'react-bootstrap';
class NavBar extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand style={{ fontWeight: 700 }}  href="\">
					<GrShieldSecurity style={{ marginInlineEnd: '21px', fontSize: 30 }} />
					Management Panel
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<NavLink href="#">Refresh</NavLink>
					<Nav className="mr-auto">

					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;
