import React, { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

function Test() {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

  return (
    <div className="contact" >
			<div data-aos="fade-right" className="col-12 col-md-7 form">
			</div>
			<div data-aos="fade-down" className="col-12 col-md-5 offset-md-7 contactinfo">
				<div style={{ height: '50%', padding: '60px' }}>
					<h5><b>Kaustubh Kuvalekar</b></h5>
					<h6>Team Leader</h6>
					<address>
						<br/>
						<strong>Team RoboManipal</strong> <br/>
          	MAHE Automobile Workshop, <br/>
          	Outside Kamath Circle, <br/>
          	Eshwar Nagar, Manipal, <br/>
          	Karnataka-576104 <br/> <br/>
						<a href="tel:+919008147494" style={{ color: 'black' }}>+91 70667 33619</a> <br/> <br/>
						<a href="mailto:team.robomanipal@gmail.com" style={{ color: 'black' }}>team.robomanipal@gmail.com</a>
					</address>
				</div>
			</div>
    </div>
  )
}

export default Test;