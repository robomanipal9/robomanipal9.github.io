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
			<div className="teambg">
				<Row className="justify-content-center pagehead">
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   OUR TEAM   </h3>
				</Row>
			</div>
			<div>
			<Container style={{ fontFamily: 'Montserrat' }}>			
				<div style={{ textAlign: 'center', paddingTop: '50px' }}>
					<h2 style={{ fontFamily: 'Montserrat-Bold' }}>Board Members</h2>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-4 profile">
						<img src="assets/images/team/sakshi.jpg" alt="Sakshi" />
							<h5>Sakshi Nitin Naik</h5>
							<p><strong>Team Leader</strong></p>
							<a href="https://www.linkedin.com/in/sakshi-naik-040502s" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>							<a href="https://github.com/The-GodfatherC4" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/shobhit.jpg" alt="Shobhit" />
							<h5>Shobhit Malpani</h5>
							<p><strong>Team Manager</strong></p>
          		<a href="https://www.linkedin.com/in/shobhit-malpani-67812a166/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/eklavya.jpg" alt="Eklavya" />
							<h5>Eklavya</h5>
							<p><strong>Mechanical Head</strong></p>
          		<a href="https://www.linkedin.com/in/eklavya-92136b21b/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/varad.jpg" alt="Varad" />
							<h5>Varad Mandar Joshi</h5>
							<p><strong>Electronics Head</strong></p>
          		<a href="https://github.com/blackVcoffee" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/naman.jpg" alt="Naman" />
							<h5>Naman More</h5>
							<p><strong>Coding Head</strong></p>
          		<a href="https://www.linkedin.com/in/naman-more-041048214" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/namanmore" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/yash.png" alt="Yash" />
							<h5>Yash Bhat</h5>
							<p><strong>Management Head</strong></p>
							<a href="http://www.linkedin.com/in/yash-bhat-644ba920a" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
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
							<img src="assets/images/team/manyu.png" alt="Manyu" />
							<h5>Manyu Garg</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/manyu-garg-25b4b9206/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/ManyuGarg472" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/nihar.jpg" alt="Nihar" />
							<h5>Nihar Bhandary</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="http://www.linkedin.com/in/nihar-bhandary-872b94155" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Niharbhandary" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/arnavI.png" alt="ArnavI" />
							<h5>Arnav Inamdar</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/arnav-inamdar-29a730229" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
							<a href="https://github.com/RedPlastic" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/navya.jpg" alt="Navya" />
							<h5>Navya Agarwal</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/navya-agarwal-3a4848247" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/shridhar.png" alt="Shridhar" />
							<h5>Shridhar Iyer</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/shridhar-iyer-95a03124a" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
							<a href="https://github.com/Srdr16" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
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
							<img src="assets/images/team/hirak.jpg" alt="Hirakjyoti" />
							<h5>Hirakjyoti Roy</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/hirakjyoti-roy-785b62218/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/HirakJR" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/sagnnik.jpg" alt="Sagnnik" />
							<h5>Sagnnik Biswas</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/sagnnik-biswas-294284202/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Sagnnik" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/arnavR.png" alt="ArnavR" />
							<h5>Arnav Rastogi</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/arnav-rastogi-a3b320226" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/ashutoshR.png" alt="AshutoshR" />
							<h5>Ashutosh Raj</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/ashutosh-raj-0001a1249" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/bhavya.png" alt="Bhavya" />
							<h5>Bhavya Doshi</h5>
							<p><strong>Member</strong></p>
          		<a href="http://www.linkedin.com/in/bhavyadoshi301" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/phybhavya" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
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
							<img src="assets/images/team/maanvi.jpg" alt="Maanvi" />
							<h5>Maanvi Singh</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/maanvi-singh-b163741a5/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/maanvisingh" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/arav.png" alt="Arav" />
							<h5>Arav Shanghavi</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/arav-shanghavi-328770204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/daksh.png" alt="Daksh" />
							<h5>Daksh</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/daksh-agiwal-0758ab249" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
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
							<img src="assets/images/team/nikhilesh.png" alt="Nikhilesh" />
							<h5>Nikhilesh Behuria</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/nikhilesh-behuria/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
							<a href="https://github.com/NikhileshVuk" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
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
