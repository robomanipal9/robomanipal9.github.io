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
							<img src="assets/images/team/vismay.jpg" alt="Vismay" />
							<h5>Vismay Sharma</h5>
							<p><strong>Team Leader</strong></p>
          		<a href="https://www.linkedin.com/in/vismay-sharma-500015204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
							<a href="https://github.com/The-GodfatherC4" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
						<img src="assets/images/team/laaboni.jpg" alt="Laaboni" />
							<h5>Laaboni Mukerjee</h5>
							<p><strong>Team Manager</strong></p>
          		<a href="https://www.linkedin.com/in/laaboni-mukerjee-16b34b188/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Laaboni" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/manu.jpg" alt="Manu" />
							<h5>Manu Jain</h5>
							<p><strong>Mechanical Head</strong></p>
          		<a href="https://www.linkedin.com/in/manu-jain-1509b31b3" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/shubham.jpg" alt="Shubham" />
							<h5>Shubham Yadav</h5>
							<p><strong>Electronics Head</strong></p>
          		<a href="https://www.linkedin.com/mwlite/in/shubham-yadav-57a447204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/pranjal.jpg" alt="Pranjal" />
							<h5>Pranjal Mishra</h5>
							<p><strong>Coding Head</strong></p>
          		<a href="https://www.linkedin.com/in/pranjal-mishra-3a79b0196/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Pranjalmishra30" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-4 profile">
							<img src="assets/images/team/saisindhu.jpg" alt="Sahas" />
							<h5>Saisindhu Valluri</h5>
							<p><strong>Management Head</strong></p>
          		<a href="https://www.linkedin.com/in/saisindhu-s-aa42b1204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Saisindhu-valluri" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
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
							<img src="assets/images/team/arush.jpg" alt="Arush" />
							<h5>Arush Mendon</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/arush-mendon-bb1613204/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/vikram.jpg" alt="Vikram" />
							<h5>Vikram Boga</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/vikram-boga-b20474204/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/eklavya.jpg" alt="Eklavya" />
							<h5>Eklavya</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/eklavya-92136b21b/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/manyu.jpg" alt="Manyu" />
							<h5>Manyu Garg</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/manyu-garg-25b4b9206/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/ManyuGarg472" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/nihar.jpg" alt="Nihar" />
							<h5>Nihar Bhandary</h5>
							<p><strong>Member</strong></p>
          		<a href="http://www.linkedin.com/in/nihar-bhandary-872b94155" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Niharbhandary" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/piyaansh.jpg" alt="Piyaansh" />
							<h5>Piyaansh Thukral</h5>
							<p><strong>Member</strong></p>
          		<a href="https://github.com/pickaboo7" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/yamit.jpg" alt="Yamit" />
							<h5>Yamit Agarwal</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/yamit-agarwal-01623a217" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Yamit22" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/yash.jpg" alt="Yash" />
							<h5>Yash Jain</h5>
							<p><strong>Member</strong></p>
          		<a href="https://github.com/THEROCKA4750" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
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
							<img src="assets/images/team/meghang.jpg" alt="Meghang" />
							<h5>Meghang Nagavekar</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/meghang-nagavekar-b924b1196/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/meghang-101" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/mukul.jpg" alt="Mukul" />
							<h5>Mukul Yadav</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="http://www.linkedin.com/in/mukul-yadav-14888a1a9" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
							<a href="https://github.com/mukul160" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/hirak.jpg" alt="Hirakjyoti" />
							<h5>Hirakjyoti Roy</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/hirakjyoti-roy-785b62218/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/HirakJR" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/mahendra.jpg" alt="Mahendra" />
							<h5>Mahendra Pratap Singh</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/mahendra-singh-726995188/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/guyrip" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/sagnnik.jpg" alt="Sagnnik" />
							<h5>Sagnnik Biswas</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/sagnnik-biswas-294284202/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Sagnnik" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/sakshi.jpg" alt="Sakshi" />
							<h5>Sakshi Nitin Naik</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/sakshi-naik-040502s" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/varad.jpg" alt="Varad" />
							<h5>Varad Mandar Joshi</h5>
							<p><strong>Member</strong></p>
          		<a href="https://github.com/blackVcoffee" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
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
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/aman-paleja-a18553170/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/41aman" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/arthur.jpg" alt="Arthur" />
							<h5>Arthur Gomes</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/arthur-francis-gomes/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/arthurgomes4" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/diwij.jpg" alt="Diwij" />
							<h5>Diwij Narang</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/diwij-narang-4611781a7/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Diwij" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/garvit.jpg" alt="Garvit" />
							<h5>Garvit Gopalani</h5>
							<p><strong>Member</strong></p>
          		<a href="https://github.com/Garvit-g" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/kartikeya.jpg" alt="Kartikeya" />
							<h5>Kartikeya Tiwari</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/kartikeya-tiwari-8b6907218/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/kark-netizen" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/maanvi.jpg" alt="Maanvi" />
							<h5>Maanvi Singh</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/maanvi-singh-b163741a5/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/maanvisingh" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/mrityunjay.jpg" alt="Mrityunjay" />
							<h5>Mrityunjay Shukla</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/mrityunjay-shukla-a066b5203/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/mrityunjayshukla411" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/naman.jpg" alt="Naman" />
							<h5>Naman More</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/naman-more-041048214" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/namanmore" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/parth.jpg" alt="Parth" />
							<h5>Parth Saravade</h5>
							<p><strong>Member</strong></p>
          		<a href="https://github.com/psychedelicorange" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
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
							<p><strong>Senior Member</strong></p>
          		<a href="http://www.linkedin.com/in/anwesha-bhattacharjee-4b198b17a" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/jaishnav.JPG" alt="Jaishnav" />
							<h5>Jaishnav Gopi</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="https://www.linkedin.com/in/jaishnavgopi/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/jaishh5" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/nikhil.jpg" alt="Nikhil" />
							<h5>Nikhil Poonacha</h5>
							<p><strong>Senior Member</strong></p>
          		<a href="http://linkedin.com/in/nikhil-poonacha-9479b5188" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/joseph.jpg" alt="Joseph" />
							<h5>Joseph Tonio David</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/joseph-tonio-david-108137201" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/rajan.jpg" alt="Rajan" />
							<h5>Rajan Sharma</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/rajan-sharma-7646611b4" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/shobhit.jpg" alt="Shobhit" />
							<h5>Shobhit Malpani</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/shobhit-malpani-67812a166/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
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
