import React from 'react';

const Footer = () => (
	<footer>
		<div className="footer-section">
			<div className="footer-col">
				<h1>CONTACT INFO</h1>
				<p>No. 10 Badore Road Ajah Lagos</p>
				<p>Call us +2348158380362</p>
				<p>bovibecom@gmail.com</p>
				<p>info@bovibecom@gmail.com</p>
			</div>
			<div className="footer-col">
				<h1>OUR SERVICES</h1>
				<p>Digital Margeting</p>
				<p>Web Design</p>
				<p>Graphics Design</p>
				<p>Events management</p>
			</div>
			<div className="footer-col">
				<h1>FOLLOW US</h1>
				<i class="fab fa-facebook-square"></i><br/>
				<i class="fab fa-instagram"></i><br/>
				<i class="fab fa-twitter"></i><br/>
			</div>
			<div className="footer-col">
				<h1>NEWSLETTER</h1>
				<input placeholder="enter your email" type="email" className="footer-email" /><br/>
				<a href="/" className="subscribetion-btn">SUBSCRIBE</a>
			</div>
		</div>
		<div className="copyright">
			<p>&copy; Copyright Bovibe Communication Develop by Bovibe Communication Service</p>
		</div>
	</footer>
);

export default Footer;