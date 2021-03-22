import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GrShieldSecurity } from 'react-icons/gr';
import { NavLink } from 'react-bootstrap';
class NavBar extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand style={{ fontWeight: 700 }}>
					<GrShieldSecurity style={{ marginInlineEnd: '21px', fontSize: 30 }} />
					Management Panel
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<NavLink href="#">Refresh</NavLink>
					<Nav className="mr-auto">
						{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;
