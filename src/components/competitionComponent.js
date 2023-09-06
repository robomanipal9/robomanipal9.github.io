import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Header from "./header.js";
import Footer from "./footer.js";
import Aos from "aos";
import "aos/dist/aos.css";

function Competition() {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<div>
			<Header />
			<div className="comphead">
				<Row className="justify-content-center pagehead" style={{ alignItems: "center" }}>
					<h3 style={{ color: "white", fontFamily: "Montserrat-Bold" }}> COMPETITIONS </h3>
				</Row>
			</div>
			<Container>
				<Row className="comp">
					<div data-aos="fade-down" class="col-lg-4 col-sm-12 mx-auto" style={{ marginTop: "90px" }}>
						<img className="mx-auto" src="assets/images/robocon.webp" alt="Robocon" />
					</div>
					<div data-aos="fade-right" class="col-lg-8 col-sm-12 compinfo">
						<h4 style={{ fontFamily: "Montserrat-Bold" }}>ABU ROBOCON</h4>
						<p>
							The annual international Robotics competition organised by Asia - Pacific Broadcasting
							Union, ABU ROBOCON calls for multiple robots to work in synchrony in a given arena to finish
							a predefined task in a stipulated period of time. Founded in 2002 the competition has become
							among the largest, most competitive and reputed robotics competitions in the world. Each
							year Robocon releases a problem statement that forces the teams to think laterally and come
							up with innovative and efficient solutions.
						</p>
						<strong>- AIR 9 in Robocon 2016</strong>
						<br />
						<strong>- Qualified for Stage 2 of Robocon 2019</strong>
						<br />
						<strong>- Qualified for Stage 2 of Robocon 2020</strong>
						<br />
						<strong>- Qualified for Stage 2 of Robocon 2021 with a score of 100/100</strong>
						<br />
						<strong>- Qualified for Nationals of Robocon 2022</strong>
						<br />
						<strong>- AIR 21 in Robocon 2023</strong>
					</div>
				</Row>
				<Row className="comp">
					<div data-aos="fade-right" class="col-lg-4 col-sm-12">
						<img className="mx-auto" src="assets/images/wro.JPG" alt="WRO" />
					</div>
					<div data-aos="fade-left" class="col-lg-8 col-sm-12 compinfo">
						<h4 style={{ fontFamily: "Montserrat-Bold" }}>WORLD ROBOTICS OLYMPIAD (WRO)</h4>
						<p>
							World Robot Olympiad India (WRO India) is one of the largest Robotics competition in India
							for students between the age group of 6 to 19 years, held since 2006. It is a not-for-profit
							competition organised by India STEM Foundation.It is an event for science, technology and
							education which brings together the young people all over the world to develop their
							creativity and problem solving skills through challenging and educational robotics
							competitions.We take up the engineering challenge for college and university students.
						</p>
						<strong>- AIR 2 in WRO 2018</strong>
					</div>
				</Row>
				<Row className="comp" style={{ paddingBottom: "50px", marginTop: "20px" }}>
					<div data-aos="fade-left" class="col-lg-12 col-sm-12 compinfo">
						<h4 style={{ fontFamily: "Montserrat-Bold", textAlign: "center", marginBottom: "30px" }}>
							OTHER COMPETITIONS
						</h4>
						<div>
							<h5 style={{ fontFamily: "Montserrat-Bold" }}>
								India Innovation Challenge Design Contest (IICDC)
							</h5>
							<p>
								IICDC is a national innovation contest wherein teams participate to create a new
								innovative product using TI components.
							</p>
							<strong>
								- Reached the semifinal of IICDC 2019, a technical competition hosted by IIM Bangalore
							</strong>
						</div>
						<div className="othercomp">
							<h5 style={{ fontFamily: "Montserrat-Bold" }}>Takshak</h5>
							<p>
								In 2021, the team was given a problem statement where they had to develop and refine a
								path planning algorithm that would allow a robot to navigate the given environment.
							</p>
							<strong>- Achieved 1st position in Takshak 2021, organised by IIT Dhanbad</strong>
						</div>
						<div className="othercomp">
							<h5 style={{ fontFamily: "Montserrat-Bold" }}>Disenyo PCB Challenge</h5>
							<p>
								In October, 2021, our team participated in the Disenyo PCB Challenge which was hosted in
								association with Indian Printed Circuit Association (IPCA).
							</p>
							<strong>- Secured 1st position in Disenyo PCB Challenge 2021</strong>
						</div>
						<div className="othercomp">
							<h5 style={{ fontFamily: "Montserrat-Bold" }}>TechFest- IIT Bombay</h5>
							<p>
								Our team participates annually in various competitions related to robotics at Techfest
								which is the annual science and technology festival of IIT Bombay.
							</p>
							<strong>- Secured 3rd place in the Micromouse Challenge at IIT-Bombay TechFest 2022</strong>
						</div>
						<div className="othercomp">
							<h5 style={{ fontFamily: "Montserrat-Bold" }}>E-Yantra</h5>
							<p>
								At e-Yantra, the team is challenged to design and simulate a robotic mechanism which
								navigates through galleries present in different rooms of an indoor farm and harvest
								berries based on factors.
							</p>
						</div>
						<div className="othercomp">
							<h5 style={{ fontFamily: "Montserrat-Bold" }}>Technoxian</h5>
							<p>
								Technoxian World Cup, is a robotics gathering with several competitions which the team
								participates in. This helps challenge the team to build multiple bots and compete on an
								International Level.
							</p>
							<strong>- Secured 3rd place in the Robo Soccer Competition 2023</strong>
						</div>
					</div>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default Competition;
