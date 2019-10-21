import React from 'react';
import Contact from './contact';

const Contactus = () => (
	<div className="main-content">
		<div className="aboutus-row">
			<div className="aboutus-col">
				<div className="aboutus-description">
					<h1>GET IN TOUCH WITH US LET'S WORK TOGETHER</h1>
					<p>We'd love to hear from you. You can call us on (+234) 8182256436 or you can email us on info@bovibecommunication.com and one of our awesome team member will get back to you. If you have a specific question, you can fill the form below and send to us.</p>
				</div>
			</div>
			<Contact />
		</div>
	</div>
);

export default Contactus;