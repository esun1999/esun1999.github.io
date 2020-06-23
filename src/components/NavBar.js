import React from 'react';
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
						<a href="/" className="nav-link">Home</a>
					</li>
					<li className="nav-item">
						<a href="/projects" className="nav-link">Projects</a>
					</li>
					<li className="nav-item">
						<a href="/work" className="nav-link">Work</a>
					</li>				
					<li className="nav-item">
						<a href= {resume} target="_blank" className="nav-link">Resume</a>
					</li>
					<li className="nav-item">
						<a href="/contact" className="nav-link">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  );
}

export default NavBar;
