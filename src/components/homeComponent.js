import React from 'react';
import Header from './header.js';
import About from './aboutComponent.js';
// import Vision from './visionComponent'
import Sponsor from './sponsorComponent'
import Contact from './contactComponent'
import Footer from './footer.js';

function Home(){
	return (
		<div>
			<div className="header" id="header">
				<Header />
				<div className="headerimg" style={{ position: 'absolute', width: '100%', height: '100%' }}>
					<img src="assets/images/rm_logo.png" alt="RM Logo" />
				</div>
				
			</div>
			<div id='about'>
				<About/>	
			</div>
			{/* <Vision />		 */}
			<div id='sponsor'>
				<Sponsor/>	
			</div>
			<div id='contact'>
				<Contact/>	
			</div>
			<Footer />
		</div>
	)
}

export default Home;