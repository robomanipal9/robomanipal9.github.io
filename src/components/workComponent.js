import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'
import Aos from "aos"
import "aos/dist/aos.css"

function Work() {

	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

  return (
    <div>
			<Header />
			<div className="workhead">
				<Row className="justify-content-center pagehead">
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   OUR WORK   </h3>
				</Row>
			</div>
			<Container style={{ paddingBottom: '50px', paddingTop: '50px' }}>
				<Row style={{ paddingTop: '30px' }}>
					<div data-aos="fade-right" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/work/electromyography.jpg" alt="Electro" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>ELECTROMYOGRAPHY</h6>
									<p>
										Electromyography(EMG) is the measurement of myoelectric signals involved in muscle activation and contraction. 
										In this project, one can measure a muscle's response, say, for example, the biceps muscle, to a specific stimulus 
										or an action.
									</p>
								</div>
							</div>
						</div>
						<h5>ELECTROMYOGRAPHY</h5>
					</div>
					<div data-aos="fade-down" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/work/gurney.png" alt="Gurney" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>POWER ASSISTED GURNEY</h6>
									<p>
										This system is used for existing gurneys used in hospitals, which permits a gurney's movement by a single person. 
										It allows any person to operate a gurney without any effort or hassles, especially during emergencies.
									</p>
								</div>
							</div>
						</div>
						<h5>POWER ASSISTED GURNEY</h5>
					</div>
					<div data-aos="fade-left" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/work/homeautomation.png" alt="Automation" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>SMART HOME AUTOMATION</h6>
									<p>
										Using the Internet of Things(IoT) concept, this project allows the owner to monitor, access, and manage the electronic 
										devices in the house from a mobile app or the web. Several sensors are involved here to monitor different devices/objects 
										in the house.
									</p>
								</div>
							</div>
						</div>
						<h5>SMART HOME AUTOMATION</h5>
					</div>
				</Row>
				<Row style={{ paddingTop: '50px' }}>
					<div data-aos="fade-right" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/work/waterfilter.jpg" alt="Filter" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>ATOMIZED CLEANING WATER DISPENSER</h6>
									<p>
										The use of conventional taps for the past few centuries has led to inefficient use, and water cleaning since most of the water goes 
										down the drain. A replacement for existing taps having atomizers in parallel and water pressurized by a localized compressor. This 
										increases cleaning efficiency, saving about 90% of tap water and electricity being used to pump the water in the same time span.
									</p>
								</div>
							</div>
						</div>
						<h5>ATOMIZED CLEANING WATER DISPENSER</h5>
					</div>
					<div data-aos="fade-up" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/work/choppercircuit.jpg" alt="Circuit" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>CHOPPER CIRCUIT</h6>
									<p>
										The project was initially started to prevent undue damage to the battery due to circuit failure. In the 2017 season of Robocon, 
										this circuit was used to measure current input to motor drivers for the launching mechanism motors. It failed due to both heavy 
										reverse spike voltages and circuit problems from the bad quality of PCB etching and the Shortage of time prevented any further 
										changes to the circuit, which was not used in the final bot.
									</p>
								</div>
							</div>
						</div>
						<h5>CHOPPER CIRCUIT</h5>
					</div>
					<div data-aos="fade-left" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/work/smartbot.jpg" alt="Smartbot" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>SMART BOT</h6>
									<p>
										The idea of a bot mechanism can walk on two feet (using pneumatic actuated mechanisms), map an environment in 3D (using Kinect or a LiDAR), 
										and interact with users. The piston can expand and contract, using a 4 bar mechanism, and this kind of actuator to easily attain joint 
										motion as shown in the diagram. A very stable base for motion is achieved with proper control theories. Software VReP is used for simulation 
										and inverse kinematics. A genetic algorithm is trained to attain walking motion.
									</p>
								</div>
							</div>
						</div>
						<h5>SMART BOT</h5>
					</div>
				</Row>
				<h2 style={{ textAlign: 'center', fontFamily: 'Montserrat-Bold', paddingTop: '70px' }}>FUTURE PROJECTS</h2>
				<Row style={{ paddingTop: '50px' }}>
					<div data-aos="fade-down" className="col-12 col-md-4 project mx-auto">
						<div className="inner mx-auto">
							<img src="assets/images/work/biped.jpg" alt="Biped" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>HUMANOID ROBOT (BIPED)</h6>
									<p>
										We took upon ourselves a challenge to design and create a biped robot that serves as a platform for the development of bipedal 
										locomotion. The goal of this project is to achieve a dynamically stable gait for walking motion of the biped robot. 
									</p>
									<p>
										The biped itself is driven by servo hydraulic actuators, many of which are custom designed. The robot has a total possible 32 
										degrees of freedom (possibly lesser subject to design changes). The current version under development is intended to be designed 
										to walk with(closed loop) and without(open loop) sensory feedback on a treadmill.
									</p>
								</div>
							</div>
						</div>
						<h5>HUMANOID ROBOT (BIPED)</h5>
						</div>
					<div data-aos="fade-down" className="col-12 col-md-4 project mx-auto">
						<div className="inner mx-auto">
							<img src="assets/images/work/quadruped.jpg" alt="Quadruped" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>QUADRUPED</h6>
									<p>
										Quadruped robots come with a vast array of difficulties, including making lightweight and high torque actuators, and even greater 
										coding challenge, with requirements such as trajectory planning, gait generation, environment sensing and navigation. Four legs 
										enable the robot to behave similar to a dog, with multiple gaits like trotting, pronking, and even canter.
									</p>
									<p>
										We have observed that when compared to wheeled robots, legged robots have much more agility, which give them greater ability in 
										traversing steep and challenging terrain. We believe, in future, quadruped robots will be crucial in law enforcement, military 
										assistance, natural calamity rescue operations and possibly even planetary explorations in space.
									</p>
								</div>
							</div>
						</div>
						<h5>QUADRUPED</h5>
					</div>
				</Row>
			</Container>
			<Footer />
    </div>
  )
}

export default Work;
