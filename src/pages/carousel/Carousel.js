import React from 'react';
import './Carousel.css';

function Carousel() {
  return (
    <div id="slides" className="carousel slide" data-interval="false">
		<ul className="carousel-indicators">
			<li data-target="#slides" data-slide-to="0" className="active"></li>
			<li data-target="#slides" data-slide-to="1"></li>
			<li data-target="#slides" data-slide-to="2"></li>
		</ul>
		<div className="carousel-inner" id="carousel-1">
			<div className="carousel-item active">
				<img src={require("../../assets/toronto.jpg")} className="bg" alt="Toronto" />
				<div className="carousel-caption flex-column firstSlide">
					<div className="p-2">
						<h1 className="display-2 logo"> Eric Sun</h1>
					</div>
					<div className="pt-2">
						<img src={require("../../assets/dp.jpg")} className="dp" alt="Eric Sun" />
					</div>
					<div className="p-4">
						<h5>Aspiring Product Manager based out of Toronto</h5>
					</div>
				</div>
			</div>
			<div className="carousel-item">
				<img src={require("../../assets/toronto.jpg")} className="bg" alt="Toronto" />
				<div className="carousel-caption subtitle">
					<div className="p-2">
						<h1 className="display-2 logo">Education</h1>
					</div>
					<div className="p-4">
						<div className="container-fluid">
							<div className="row align-items-center text-center">
								<div className="col-12 col-md-6">
									<img src={require("../../assets/uwo.png")} className="img-fluid main-page-img" alt="Western University" />
								</div>
								<div className="col-12 col-md-6">
									<p className="font-weight-light">I'm currently in my third year studying computer science at the University of Western Ontario. From advising startups in our campus accelerator to tackling business case competitions, I love getting involved in areas of interest!</p>
									<p>In my free time, I've been learning Android Development through MOOCs from Udacity and Youtube videos! Check out my projects <a href="projects.html">here</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="carousel-item">
				<img src={require("../../assets/toronto.jpg")} className="bg" alt="Toronto" />
				<div className="carousel-caption subtitle">
					<div className="p-3">
					<h1 className="display-2 logo">Content</h1>
					</div>
					<div className="container-fluid">
					<div className="row align-items-center text-center">
						<div className="col-12 pb-5">
							<h3>Here are some of my favourites from the past year!</h3>
						</div>
						<div className="col-12 col-md-6 text-center">
							<h1>Text 📚</h1>
							<ul>
								<li><b><a href="https://stratechery.com/" className="content-links" target="_blank">Stratechery</a></b> - Ben Thompson</li>
								<li><b><a href="https://www.goodreads.com/book/show/40121378-atomic-habits" className="content-links" target="_blank">Atomic Habits</a></b> - James Clear</li>
								<li><b><a href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning?ac=1&from_search=true" className="content-links" target="_blank">Man's Search for Meaning</a></b> - Viktor Frankl</li>
								<li><b><a href="https://www.goodreads.com/book/show/36200111-tribe-of-mentors?ac=1&from_search=true" className="content-links" target="_blank">Tribe of Mentors</a></b> - Tim Ferris</li>
								<li><b><a href="https://www.goodreads.com/book/show/30257963-12-rules-for-life?ac=1&from_search=true" className="content-links" target="_blank">12 Rules for Life</a></b> - Jordan Peterson</li>
							</ul>						
						</div>
						<div className="col-12 col-md-6 text-center">
							<h1>Podcasts 🎧</h1>
							<ul>
								<li><b><a href="https://exponent.fm/" className="content-links" target="_blank">Exponent</a></b> - Ben Thompson</li>
								<li><b><a href="https://mastersofscale.com/" className="content-links" target="_blank">Masters of Scale</a></b> - Reid Hoffman</li>
								<li><b><a href="https://hbr.org/2018/10/podcast-after-hours" className="content-links" target="_blank">After Hours</a></b> - HBR</li>
								<li><b><a href="https://www.zerotoipopodcast.com/" className="content-links" target="_blank">Zero to IPO</a></b> - Okta</li>
								<li><b><a href="https://gimletmedia.com/shows/startup" className="content-links" target="_blank">StartUp Podcast</a></b> - Gimlet</li>
							</ul>
						</div>
					</div>	
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#slides" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#slides" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
		</div>
	</div>
  );
}

export default Carousel;
