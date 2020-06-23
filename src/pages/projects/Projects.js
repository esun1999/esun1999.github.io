import React from 'react';
import './Projects.css';

function Projects() {
  return (
	<div class="card-deck">
	<div class="card text-white bg-dark mb-3">
		<div class="modal fade" id="freestyle_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div id="freestyle-slides" class="carousel slide" data-interval="false">
						<div class="carousel-inner" id="carousel-1">
							<div class="carousel-item active">
								<img src={require("../../assets/freestyle/1.png")} class="bg" alt="Freestyle"/>
							</div>
							<div class="carousel-item">
								<img src={require("../../assets/freestyle/2.png")} class="bg" alt="Freestyle"/>
							</div>
						</div>
						<a class="carousel-control-prev" href="#freestyle-slides" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#freestyle-slides" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<button type="button" data-toggle="modal" data-target="#freestyle_modal"><img class="card-img-top" src={require("../../assets/freestyle/1.png")} alt="Freestyle"/></button>
		<div class="card-body">
			<h5 class="card-title"><b><a href="https://github.com/esun1999/freestyle" target="_blank">Freestyle</a></b></h5>
			<p class="card-text">Android app used to practice freestyle rapping - implements Wordnik's Random Word API and MVVM architecure</p>
		</div>
	</div>

	<div class="card text-white bg-dark mb-3">
		<div class="modal fade" id="tabata_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div id="tabata-slides"class="carousel slide" data-interval="false">
						<div class="carousel-inner" id="carousel-1">
							<div class="carousel-item active">
								<img src={require("../../assets/tabata_timer/1.png")} class="bg" alt="Tabata Timer"/>
							</div>
							<div class="carousel-item">
								<img src={require("../../assets/tabata_timer/2.png")} class="bg" alt="Tabata Timer"/>
							</div>
						</div>
						<a class="carousel-control-prev" href="#tabata-slides" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#tabata-slides" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<button type="button" data-toggle="modal" data-target="#tabata_modal"><img class="card-img-top" src={require("../../assets/tabata_timer/1.png")} alt="Tabata Timer"/></button>
		<div class="card-body">
			<h5 class="card-title"><b><a href="https://github.com/esun1999/tabatatimer" target="_blank">Tabata Timer</a></b></h5>
			<p class="card-text">Android app used for Tabata (high intensity interval training) workouts. MVVM and Factory Method design patterns, with persistent data storage</p>
		</div>
	</div>

	<div class="card text-white bg-dark mb-3">
		<div class="modal fade" id="website_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div id="website-slides"class="carousel slide" data-interval="false">
						<div class="carousel-inner" id="carousel-1">
							<div class="carousel-item active">
								<img src={require("../../assets/website/1.png")} class="bg" alt="Personal Website"/>
							</div>
							<div class="carousel-item">
								<img src={require("../../assets/website/2.png")} class="bg" alt="Personal Website"/>
							</div>
						</div>
						<a class="carousel-control-prev" href="#website-slides" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#website-slides" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<button type="button" data-toggle="modal" data-target="#website_modal"><img class="card-img-top" src={require("../../assets/website/1.png")} alt="Personal Website"/></button>
		<div class="card-body">
			<h5 class="card-title"><b><a href="https://github.com/esun1999/Personal-Website" target="_blank">Personal Website</a></b></h5>
			<p class="card-text">Personal profile, hosted on Github Pages. Responsive design using Bootstrap and media queries</p>
		</div>
	</div>
</div>
  );
}

export default Projects;
