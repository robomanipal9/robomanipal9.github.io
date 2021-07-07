import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'
import Aos from "aos"
import "aos/dist/aos.css"

function Team() {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

  return (
    <div>
      <Header />
			<div className="pagebg">
				<Row className="justify-content-center pagehead">
					{/* <span></span>   */}
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   OUR TEAM   </h3>
					{/* <span></span> */}
				</Row>
			</div>
			<div>
			<Container style={{ fontFamily: 'Montserrat' }}>			
				<div style={{ textAlign: 'center', paddingTop: '50px' }}>
					<h2 style={{ fontFamily: 'Montserrat-Bold' }}>Board Members</h2>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/kaustubh.jpg" alt="Kaustubh" />
							<h5>Kaustubh Kuvalekar</h5>
							<p><strong>Team Leader</strong></p>
          		<a href="https://www.linkedin.com/in/kaustubh-kuvalekar-165079185/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/simran.jpg" alt="Simran" />
							<h5>Simran Malhotra</h5>
							<p><strong>Team Manager</strong></p>
          		<a href="https://www.linkedin.com/in/simranmalhotramit/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/malhotrasimran2000" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/arthik.png" alt="Arthik" />
							<h5>Arthik Raj B Jain</h5>
							<p><strong>Electronics Head</strong></p>
          		<a href="https://www.linkedin.com/in/arthik-raj-b-jain-6921911b9" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/harshvardhan.jpg" alt="Harshvardhan" />
							<h5>Harshvardhan Reddy</h5>
							<p><strong>Mechanical Head</strong></p>
          		<a href="https://www.linkedin.com/in/harshavardhan-reddy-2256a1204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/abhishek.jpg" alt="Abhishek" />
							<h5>Abhishek Deshpande</h5>
							<p><strong>Coding Head</strong></p>
          		<a href=" https://www.linkedin.com/in/abhishek-r-deshpande/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/abhishekd-1" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/sahas.jpg" alt="Sahas" />
							<h5>Sahas Agarwal</h5>
							<p><strong>ARR Head</strong></p>
          		<a href=" https://www.linkedin.com/in/sahas-agarwal-58874b175/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href=" https://github.com/Veverest" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Mechanical</h2><br></br>
					<div data-aos="fade-right">
						<p><i>"No TECH without <strong>MECH</strong>."</i></p>
						<p>
							Mechanical work comprises of designing and manufacturing of the robot. Our team works on 3D modeling, actuator design, 
							real-time constraint simulation, and robust design for robots' efficient functioning. Different CAD models are developed 
							for other mechanisms and experiments, including real-time testing, simulation, and analysis.
						</p>
					</div>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" alt="Dhanush" />
							<h5>Dhanush Verma</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/dhanush-varma-595b7b191" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/dion.jpg" alt="Dion" />
							<h5>Dion Machado</h5>
							<p><strong>Member</strong></p>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/arush.jpg" alt="Arush" />
							<h5>Arush Mendon</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/arush-mendon-bb1613204/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/manu.jpg" alt="Manu" />
							<h5>Manu Jain</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/manu-jain-1509b31b3" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/vikram.jpg" alt="Vikram" />
							<h5>Vikram Boga</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/vikram-boga-b20474204/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Electronics</h2><br></br>
					<div data-aos="fade-left">
						<p><i>
							"You can involve yourself in electronics, computers, puzzles... there's a lot of creativity and brain working. 
							There's a lot to model trains that people don't realize."
						</i></p>
						<p>The electronics subsystem is the central system to function the robot. We work on rapid PCB prototyping to interfacing 
							a wide range of sensors to DAQ. From choosing the right components to design specificized pieces, we specialize in all. 
							To exclude off-the-shelf electronics to make the bot specific, the study is carried out to develop, simulate and validate 
							circuits.
						</p>
					</div>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/aniruddh.jpg" alt="Aniruddh" />
							<h5>Aniruddh Mallya</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/aniruddh-mallya-a88729178" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/sukrita.jpg" alt="Sukrita" />
							<h5>Sukrita Panigrahi</h5>
							<p><strong>Member</strong></p>
          		<a href="http://www.linkedin.com/in/sukrita-panigrahi-27734b171" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/tanushka.jpg" alt="Tanushka" />
							<h5>Tanushka Singh</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/tanushka-singh-a70754186" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/laaboni.jpg" alt="Laaboni" />
							<h5>Laaboni Mukerjee</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/laaboni-mukerjee-16b34b188/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Laaboni" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/meghang.jpg" alt="Meghang" />
							<h5>Meghang Nagavekar</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/meghang-nagavekar-b924b1196/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/meghang-101" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/mukul.jpg" alt="Mukul" />
							<h5>Mukul Yadav</h5>
							<p><strong>Member</strong></p>
          		<a href="http://www.linkedin.com/in/mukul-yadav-14888a1a9" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/shubham.jpg" alt="Shubham" />
							<h5>Shubham Yadav</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/mwlite/in/shubham-yadav-57a447204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/vismay.jpg" alt="Vismay" />
							<h5>Vismay Sharma</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/vismay-sharma-500015204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Coding</h2><br></br>
					<div data-aos="fade-right">
						<p><i>"Everybody should learn to program a computer because it teaches you how to think."</i></p>
						<p>
							Programming is an essential part when it comes to handling robots. Our coding subsystem links the electronics and mechanical 
							work in coordination, from programming microcontroller microcontrollers and processors, interfacing electronics and mechanics, 
							neural networks, and deep learning to computer vision and sensing. They work on the design and semi/complete automation of 
							processes for reliable control systems.
						</p>
					</div>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/aman.png" alt="Aman" />
							<h5>Aman Paleja</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/aman-paleja-a18553170/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/41aman" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/arthur.jpg" alt="Arthur" />
							<h5>Arthur Gomes</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/arthur-francis-gomes/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/arthurgomes4" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/diwij.jpg" alt="Diwij" />
							<h5>Diwij Narang</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/diwij-narang-4611781a7/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Diwij" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/pranjal.jpg" alt="Pranjal" />
							<h5>Pranjal Mishra</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/pranjal-mishra-3a79b0196/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Pranjalmishra30" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Management</h2><br></br>
					<div data-aos="fade-left">
						<p><i>"<strong>Management</strong> is, above all, a practice where art, science, and craft meet." </i></p>
						<p>
							Management subsystem deals with finances and sponsorship, advertisement, and graphics. Our team works for the competent functioning 
							of the whole student project maintaining harmony amongst all the subsystems. Public relations and human resources are also a part of 
							our responsibilities. Operations, business management, strategic planning, and web/app development are our specializations.
						</p>
					</div>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/anwesha.jpg" alt="Anwesha" />
							<h5>Anwesha Bhattacharjee</h5>
							<p><strong>Member</strong></p>
          		<a href="http://www.linkedin.com/in/anwesha-bhattacharjee-4b198b17a" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/aryan.jpg" alt="Aryan" />
							<h5>Aryan Sinha</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/aryan-sinha-962b78204/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/jaishnav.JPG" alt="Jaishnav" />
							<h5>Jaishnav Gopi</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/jaishnav-gopi-1924341b9/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/jaishh5" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/nikhil.jpg" alt="Nikhil" />
							<h5>Nikhil Poonacha</h5>
							<p><strong>Member</strong></p>
          		<a href="http://linkedin.com/in/nikhil-poonacha-9479b5188" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/saisindhu.jpg" alt="Saisindhu" />
							<h5>Saisindhu Valluri</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/saisindhu-s-aa42b1204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Saisindhu-valluri" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Advanced Robotics Research</h2><br></br>
					<div data-aos="fade-right" style={{ paddingBottom: '50px' }}>
						<p><i>"There is an endless number of things to discover about robotics. A lot of it is just too fantastic for people to believe."</i></p>
						<p>
							Advanced Robotics Research is the novel subsystem of our student project. The subsystem deals with conceptualizations of 
							robotics with other advanced technologies. We work on the research and development of this vast art of building and working robots. 
							ARR is the new way to unveil the skillset of our team and challenge the minds of innovation.
						</p>
					</div>
				</div>
			</Container>
			<Footer />
			</div>
    </div>
  )
}

export default Team;
