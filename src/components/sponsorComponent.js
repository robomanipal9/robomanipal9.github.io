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
					<a href="https://robokits.co.in/" target="_blank" rel="noreferrer"><img src="assets/images/sponsor/robokits.jpg" alt="Robokits" /></a>
					<a href="https://www.solidworks.com/" target="_blank" rel="noreferrer"><img src="assets/images/sponsor/solidworks.png" alt="Solidworks" /></a>
    			<a href="https://www.molex.com/molex/home" target="_blank" rel="noreferrer"><img src="assets/images/sponsor/molex.png" alt="Molex" /></a>
					<a href="https://www.oyorooms.com/" target="_blank" rel="noreferrer"><img src="assets/images/sponsor/oyo.png" alt="Oyo" /></a>
					<a href="https://www.thesouledstore.com/" target="_blank" rel="noreferrer"><img src="assets/images/sponsor/souledstore.jpg" alt="Souled Store" /></a>
					<a href="https://www.intel.in/content/www/in/en/homepage.html" target="_blank" rel="noreferrer"><img src="assets/images/sponsor/intel.png" alt="Intel" /></a>
    			<a href="https://fracktal.in/" target="_blank" rel="noreferrer"><img src="assets/images/fracktal.jpg" alt="Fracktal Works" /></a>
					<a href="https://www.pcbpower.com/" target="_blank" rel="noreferrer"><img src="assets/images/sponsor/pcb.png" alt="PCB" /></a>
					<a href="https://www.credencerobotics.com/" target="_blank" rel="noreferrer"><img src="assets/images/credence.png" alt="Credence Robotics" /></a>
					<a href="https://www.augment3di.com/" target="_blank" rel="noreferrer"><img src="assets/images/sponsor/augment.png" alt="Augment 3Di" /></a>
					<img src="assets/images/strange.jpg" alt="Strange Matter" />
				</div>
			</Container>
    </div>
  )
}

export default Sponsor;