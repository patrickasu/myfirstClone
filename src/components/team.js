import React from 'react';
import { Link } from 'react-router-dom';
import Comfort from '../comfort.jpg';
import Chibike from '../chibike.jpg';

const Team = () => (
	<div className="main-content">
		<span className="portfolio-span">OUR </span><span className="portfolio-span2">TEAM</span>
		<div className="portfolio-section">
			<div className="myportfolio-section">
				<span className="portfolio-span-descr">WHY CHOOSE US </span>
				<p className="team-contact-des">We are a dedicated team that deliver quality products that satisfied our clients. We are a dedicated team that deliver quality products that satisfied.</p>
				<Link className="about-link" to="/contact">READ MORE</Link>
			</div>
			<img className="team-section-image-1" src={Comfort} alt="Our Team"/>
			<img className="team-section-image-2" src={Chibike} alt="Our Team"/>
			<div className="team-section-image-3">
				<div className="portfolio-overlay">
					<div className="portfolio-overlay-border">
						<span className="team-name">TINA JOHN <br/> <span className="team-position">Office Manager </span><br/> <span></span>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
						</span><br/>
					</div>
				</div>
			</div>	
		</div>
	</div>
);

export default Team;