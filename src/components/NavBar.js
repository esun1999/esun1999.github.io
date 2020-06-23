import React from 'react';
import { Link } from 'react-router-dom';

import resume from '../assets/resume.pdf'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
		<div className="container-fluid">
			<a href="/" className="navbar-brand">Eric Sun</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to="/" className="nav-link">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/projects" className="nav-link">Projects</Link>
					</li>
					<li className="nav-item">
						<Link to="/work" className="nav-link">Work</Link>
					</li>				
					<li className="nav-item">
						<a href= {resume} target="_blank" className="nav-link">Resume</a>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  );
}

export default NavBar;
