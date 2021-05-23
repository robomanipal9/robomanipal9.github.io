import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'
import Aos from "aos"
import "aos/dist/aos.css"

function Competition() {

	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

  return (
		<div>
			<Header />
			<div className="comphead">
				<Row className="justify-content-center pagehead" style={{ alignItems: 'center' }}>
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   COMPETITIONS   </h3>
				</Row>
			</div>
			<Container>
				<Row className="comp">
					<div data-aos="fade-down" class="col-lg-4 col-sm-12 mx-auto">
						<img className="mx-auto" src="assets/images/robocon.jpg" alt="Robocon" />
					</div>
					<div data-aos="fade-right" class="col-lg-8 col-sm-12 compinfo">
						<h4 style={{ fontFamily: 'Montserrat-Bold' }}>ABU ROBOCON</h4>
						<p>The annual international Robotics competition organised by Asia - Pacific Broadcasting Union, ABU ROBOCON calls for 
							multiple robots to work in synchrony in a given arena to finish a predefined task in a stipulated period of time. Founded 
							in 2002 the competition has become among the largest, most competitive and reputed robotics competitions in the world. 
							Each year Robocon releases a problem statement that forces the teams to think laterally and come up with innovative and 
							efficient solutions. 
						</p>
						<strong>- AIR 9 in ROBOCON 2016</strong> <br/>
						<strong>- QUALIFIED FOR STAGE 2 OF ROBOCON 2020</strong>
					</div>
				</Row>
				<Row className="comp" style={{ paddingBottom: '50px'}}>
					<div data-aos="fade-right" class="col-lg-4 col-sm-12">
						<img className="mx-auto" src="assets/images/wro.JPG" alt="WRO" />
					</div>
					<div data-aos="fade-left" class="col-lg-8 col-sm-12 compinfo">
						<h4 style={{ fontFamily: 'Montserrat-Bold' }}>WORLD ROBOTICS OLYMPIAD (WRO)</h4>
						<p>World Robot Olympiad India (WRO India) is one of the largest Robotics competition in India for students between the age group 
							of 6 to 19 years, held since 2006. It is a not-for-profit competition organised by India STEM Foundation.It is an event for 
							science, technology and education which brings together the young people all over the world to develop their creativity and 
							problem solving skills through challenging and educational robotics competitions.We take up the engineering challenge for college 
							and university students.
						</p>
						<strong>- AIR 2 in WRO 2018</strong>
					</div>
				</Row>
		 	</Container>
			<Footer />
		</div>
	)
}

export default Competition;
