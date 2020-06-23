import React from 'react';
import './Work.css';

function Work() {
    return (
        <div>
            <div class="container-fluid" id="work">
                <div class="row align-items-center text-center">
                    <div class="col-12 col-md-6">
                        <button type="button" data-toggle="modal" data-target="#wave_modal"><img src={require("../../assets/wave/logo.png")} class="img-fluid main-page-img" alt="Wave TV" /></button>
                    </div>
                    <div class="col-12 col-md-6">
                        <p class="font-weight-light"><b><a href="https://wearewave.tv/" target="_blank">Wave</a></b> is sports media for the next generation of fans, operating across media platforms boasting 24M subscribers and ~1B monthly content views. My project was to validate e-commerce as a new revenue stream. In doing so, I singlehandedly developed, designed and maintained our online storefront. I also led all marketing efforts, operations and strategy. I learned a ton about multiple business functions and gained a cohesive understanding of "starting up", via this internal experiment. <i>Click</i> the logo to see screenshots of the shop!</p>
                    </div>
                    <div class="col-12 col-md-6">
                        <img src={require("../../assets/shoelace.png")} class="img-fluid main-page-img" alt="Shoelace" />
                    </div>
                    <div class="col-12 col-md-6">
                        <p class="font-weight-light"><b><a href="https://shoelace.com/" target="_blank">Shoelace</a></b> is an ad-tech company that shows the right ads, to the right customer, at the right time. By leveraging human expertise and software automation, Shoelace makes retargeting accessible to all e-commerce businesses. This was my first deep dive into Product, working directly under our only PM. I worked to improve and identify opportunities for our brand new <i>Integrations</i> product, using data analysis, tackling customer inquiries and leading product strategy initiatives. I also spearheaded an internal project to shift toward data-driven decision making throughout departments.</p>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="wave_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div id="wave-slides" class="carousel slide" data-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={require("../../assets/wave/m1.png")} class="img-fluid mobile" alt="Mobile Wave 1" />
                                </div>
                                <div class="carousel-item">
                                    <img src={require("../../assets/wave/m2.png")} class="img-fluid mobile" alt="Mobile Wave 2" />
                                </div>
                                <div class="carousel-item">
                                    <img src={require("../../assets/wave/d1.jpg")} class="img-fluid desktop" alt="Desktop Wave 1" />
                                </div>
                                <div class="carousel-item">
                                    <img src={require("../../assets/wave/d2.png")} class="img-fluid desktop" alt="Desktop Wave 2" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#wave-slides" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#wave-slides" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
