import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
    return (
        <div class="container-fluid padding contact-text">
            <div class="row text-center padding">
                <div class="col-12">
                    <h2 id="contact-heading">Find me on:</h2>
                </div>
                <div class="col-12 social padding">
                    <a href="mailto:esun1999@gmail.com" target="_blank"><FontAwesomeIcon icon="envelope-square" /></a>
                    <a href="https://www.linkedin.com/in/esun23" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
                    <a href="https://github.com/esun1999" target="_blank"><FontAwesomeIcon icon={['fab', 'github-square']}/></a>
                    <a href="https://medium.com/@suneric" target="_blank"><FontAwesomeIcon icon={['fab', 'medium']}/></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
