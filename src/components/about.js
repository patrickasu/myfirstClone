import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
	<div className="main-content">
		<div className="about-row">
			<div className="about-col">
				<div className="wellness-description">
					<span className="about-span">ABOUT </span><span className="about-span2">US</span>
					<p className="about-des">Bovibes Communication Service is one of the leading communication consultancies and Technology Provider in Nigeria. We offer Business and Computer Software consultancy with special interest in computerisation of SME/businesses.<span className="about-des-span">Our mission is to automate our client’s businesses and organisational processes in order for them to run their organisations/businesses more efficiently. And providing them with real and lasting benefits that are profitable.</span></p>
					<Link className="about-link" to="/contact">READ MORE</Link>
				</div>
			</div>
			<div className="about-image"></div>
		</div>
	</div>
);

export default About;