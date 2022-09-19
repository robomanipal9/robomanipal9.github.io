import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap';
import Aos from "aos"
import "aos/dist/aos.css"


const About = () => {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

  return (
    <div className="about">
			<Container>
				<div data-aos="fade-down" className="col-xl-4">
					<div>
						<img className="aboutimg" src="./assets/images/about1.jpg" alt="Robo_Portrait" style={{ float: 'left', paddingTop: '50px',height: '80vh' }}/>	
						{/* <img className="aboutimg" src="./assets/images/about1.png" alt="Robo_Portrait" style={{ float: 'left', paddingTop: '50px',height: '50vh' }}/>	 */}
					</div>
				</div>
				<div data-aos="fade-right" className="col-12 col-xl-6" style={{ float: 'right', textAlign: 'left' }}>
					<Row className=" justify-content-center abouthead" style={{ paddingTop: '50px' }}>
						<span></span>  
						<h3 style={{color: 'black', fontFamily: 'Montserrat-Bold' }}>   ABOUT US   </h3>
						<span></span>
					</Row>
					<p style={{ fontFamily: 'Montserrat' }}>
						Team RoboManipal is the official Robotics team of MAHE, Manipal established in 2009. We are a multidisciplinary team of 40+ 
						undergraduate robotics enthusiasts who endeavour to achieve innovation through robotic technologies and spread knowledge about 
						its diverse applications.
					</p>
					<p style={{ fontFamily: 'Montserrat' }}>
						The legacy of 13 years to have won laurels at many levels is a testament to our enthusiasm. We participate in prestigious 
						competitions like ABU ROBOCON - Asia’s biggest Robotic Competition. Robotreks and Robowars, the most exciting events of 
						TechTatva which attract teams from all over India, are organised by RoboManipal. Apart from all this, we’re also working on 
						various research projects, including the 6DOF , A Biped (Humanoid) Robot and a Quadruped Robot.
					</p>
					<Row className=" justify-content-center visionhead" style={{ paddingTop: '10px', alignItems: 'center' }}>
						<span></span>  
						<h3 style={{color: 'black', fontFamily: 'Montserrat-Bold' }}>   VISION   </h3>
						<span></span>
					</Row>
					<p style={{ fontFamily: 'Montserrat' }}>
						Our team strongly believes in a future for robotics that will take the world forward with innovative technologies and 
						enrich human lives to create an environment conducive to creativity.
					</p>
					<Row className=" justify-content-center visionhead" style={{ paddingTop: '10px', alignItems: 'center' }}>
						<span></span>  
						<h3 style={{color: 'black', fontFamily: 'Montserrat-Bold' }}>   MISSION   </h3>
						<span></span>
					</Row>
					<p style={{ paddingBottom:'30px', fontFamily: 'Montserrat' }}>
						We strive to formulate effective solutions to complex problems with the help of Robotics and its applications and compete 
						in the toughest Robotics competitions in the world. Our innovation starts with a DREAM to elucidate problems as we BUILD 
						solutions to ACHIEVE the limitless. 
					</p>
				</div>
			</Container>
		</div>
  )
}

export default About;
