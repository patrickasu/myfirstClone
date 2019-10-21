import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => (
	<div className="nav-img">
		<nav>
			<span>Bovibe </span><span className="nav-span"> Communication Service</span>
			<ul className="navigation-menu">
				<li><NavLink className="navigation-link" exact to="/">Home</NavLink></li>
				<li><NavLink className="navigation-link" to="/aboutus">About us</NavLink></li>
				<li><NavLink className="navigation-link" to="/myservices">Services</NavLink></li>
				<li><NavLink className="navigation-link" to="/events">Portfolio</NavLink></li>
				<li><NavLink className="navigation-link" to="/contactus">Contact</NavLink></li>
			</ul>
		</nav>
		<h3 className="nav-header1">WE'ARE</h3>
		<p className="nav-header2">CREATIVE</p>
		<Link className="contactus-link" to="/contact">CONTACT US</Link>
	</div>
);

export default Navbar;