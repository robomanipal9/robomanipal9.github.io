import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'

const Gallery = () => {
  return (
    <div id="gallery">
      <Header />
			<div className="pagebg">
				<Row className="justify-content-center pagehead">
					{/* <span></span>   */}
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   GALLERY   </h3>
					{/* <span></span> */}
				</Row>
    	</div>
			<Container>
				<Row>
					<div className="wrapper">
						<div id="box1" className="gridinner">
							<img src="assets/images/gallery/workshop.jpeg" alt="Workshop" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Workshop</h6>
								</div>
							</div>
						</div>
						<div id="box2" className="gridinner">
							<img src="assets/images/gallery/wro1.jpg" alt="WRO1" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>WRO '18</h6>
								</div>
							</div>
						</div>
						<div id="box3" className="gridinner">
							<img src="assets/images/gallery/robocon15bot.jpg" alt="Robo15 Bot" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Robocon '15 Bot</h6>
								</div>
							</div>
						</div>
						<div id="box4" className="gridinner">
							<img src="assets/images/gallery/rajeevsuri.jpg" alt="Rajeev Suri" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Rajeev Suri at RM</h6>
								</div>
							</div>
						</div>
						<div id="box5" className="gridinner">
							<img src="assets/images/gallery/robocon16bot.jpg" alt="Robo16 Bot" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Robocon '16 Bot</h6>
								</div>
							</div>
						</div>
						<div id="box6" className="gridinner">
							<img src="assets/images/gallery/robocon16.jpg" alt="Robo16" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Robocon '16</h6>
								</div>
							</div>
						</div>
						<div id="box7" className="gridinner">
							<img src="assets/images/gallery/wro6.jpg" alt="WRO6" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>WRO '18</h6>
								</div>
							</div>
						</div>
						<div id="box8" className="gridinner">
							<img src="assets/images/gallery/circuit.png" alt="Circuit" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Circuit</h6>
								</div>
							</div>
						</div>
						<div id="box9" className="gridinner">
							<img src="assets/images/gallery/team.jpg" alt="Team" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Team</h6>
								</div>
							</div>
						</div>
						<div id="box10" className="gridinner">
							<img src="assets/images/gallery/robocon17.jpg" alt="Robo17" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Robocon '17</h6>
								</div>
							</div>
						</div>
						<div id="box11" className="gridinner">
							<img src="assets/images/gallery/biped.jpeg" alt="Biped" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Biped</h6>
								</div>
							</div>
						</div>
						<div id="box12" className="gridinner">
							<img src="assets/images/gallery/wro2.jpg" alt="WRO2" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>WRO '18</h6>
								</div>
							</div>
						</div>
						<div id="box13" className="gridinner">
							<img src="assets/images/gallery/robowars.jpeg" alt="Robowars" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Robowars</h6>
								</div>
							</div>
						</div>
						<div id="box14" className="gridinner">
							<img src="assets/images/gallery/robocon18.jfif" alt="Robo18" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Robocon '18</h6>
								</div>
							</div>
						</div>
						<div id="box15" className="gridinner">
							<img src="assets/images/gallery/wro3.jpg" alt="WRO3" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>WRO '18</h6>
								</div>
							</div>
						</div>
						<div id="box16" className="gridinner">
							<img src="assets/images/gallery/robocon18bot.jpg" alt="Robo18 Bot" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Robocon '18 Bot</h6>
								</div>
							</div>
						</div>
						<div id="box17" className="gridinner">
							<img src="assets/images/gallery/wro4.jpg" alt="WRO4" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>WRO '18</h6>
								</div>
							</div>
						</div>
						<div id="box18" className="gridinner">
							<img src="assets/images/gallery/robocon20bot.png" alt="Robo20 Bot" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>Robocon '20 Bot</h6>
								</div>
							</div>
						</div>
						<div id="box19" className="gridinner">
							<img src="assets/images/gallery/wro5.jpg" alt="WRO5" />
							<div className="overlay">
								<div className="gallinfo">
									<h6>WRO '18</h6>
								</div>
							</div>
						</div>
					</div>
				</Row>
			</Container>
			<Footer />
		</div>
  )
}

export default Gallery
