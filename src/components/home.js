import React from 'react';
import About from './about';
import Services from './services';
import Portfolio from './portfolio';
import Team from './team';
import Contact from './contact';


const Home = () => {
	return (
		<React.Fragment>
			<About />
			<Services />
			<Portfolio />
			<Team />
			<Contact />
		</React.Fragment>
	)
}

export default Home;