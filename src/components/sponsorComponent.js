import React from 'react'
import { Container, Row } from 'reactstrap';

function Sponsor () {
  return (
    <div className="sponsor1"> 
			<Row className="justify-content-center sponsorhead" style={{ paddingTop: '90px' }}>
				<span></span>  
				<h2 style={{color: 'black', fontFamily: 'Montserrat-Bold'}}>   OUR SPONSORS   </h2>
				<span></span>
			</Row>
			<Container className="sponsor" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
				<div style={{ textAlign: 'center' }}>
					<img src="assets/images/sponsor/robokits.jpg" alt="Robokits" />
					<img src="assets/images/sponsor/solidworks.png" alt="Solidworks" />
    			<img src="assets/images/sponsor/molex.png" alt="Molex" />
					<img src="assets/images/sponsor/oyo.png" alt="Oyo" />
					<img src="assets/images/sponsor/souledstore.jpg" alt="Souled Store" />
   		 		<img src="assets/images/sponsor/intel.png" alt="Intel" />
    			<img src="assets/images/fracktal.jpg" alt="Fracktal Works" />
					<img src="assets/images/sponsor/pcb.png" alt="PCB" />
					<img src="assets/images/credence.png" alt="Credence Robotics" />
					<img src="assets/images/sponsor/augment.png" alt="Augment 3Di" />
					<img src="assets/images/strange.jpg" alt="Strange Matter" />
				</div>
			</Container>
    </div>
  )
}

export default Sponsor;