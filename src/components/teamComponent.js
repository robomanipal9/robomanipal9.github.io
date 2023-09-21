import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Header from "./header.js";
import Footer from "./footer.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Team() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div>
			<Header />
			<div className="teambg">
				<Row className="justify-content-center pagehead">
					<h3 style={{ color: "white", fontFamily: "Montserrat-Bold" }}> OUR TEAM </h3>
				</Row>
			</div>
			<div className="bg-slate-100">
				<Container style={{ fontFamily: "Montserrat" }}>
					<div style={{ textAlign: "center", paddingTop: "50px" }}>
						<h2 style={{ fontFamily: "Montserrat-Bold" }}>Board Members</h2>
						<div className="flex flex-row flex-wrap w-full mx-auto justify-evenly items-center gap-5 my-10">
							<div className="w-[14rem] h-fit p-3 bg-white shadow-md shadow-gray-300 rounded-md flex flex-col items-center justify-center">
								<img
									className="w-full object-cover rounded-lg"
									src="assets/images/team/arnavR.png"
									alt="ArnavR"
								/>
								<h5 className="mt-3">Arnav Rastogi</h5>
								<p>
									<strong>Team Leader</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/arnav-rastogi-a3b320226"
									target="_blank"
									rel="noreferrer">
									<AiFillLinkedin className="w-6 h-6 rounded-md hover:text-blue-700 text-blue-700" />
								</a>
							</div>
							<div className="w-[14rem] h-fit p-3 bg-gray-50 shadow-md shadow-gray-300 rounded-md flex flex-col items-center justify-center">
								<img
									className="rounded-lg w-full object-cover"
									src="assets/images/team/bhavya.png"
									alt="bhavya"
								/>
								<h5 className="mt-3">Bhavya Doshi</h5>
								<p>
									<strong>Team Manager</strong>
								</p>
								<div className="flex flex-row space-x-3 justify-center items-center">
									<a
										href="http://www.linkedin.com/in/bhavyadoshi301"
										target="_blank"
										rel="noreferrer">
										<AiFillLinkedin className="w-6 h-6 rounded-md hover:text-blue-700 text-blue-700" />
									</a>
									<a href="https://github.com/phybhavya" target="_blank" rel="noreferrer">
										<AiFillGithub className="w-6 h-6 rounded-md hover:text-black text-black" />
									</a>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center my-10">
							<div className="w-[14rem] h-fit p-3 bg-gray-50 shadow-md shadow-gray-300 rounded-md flex flex-col items-center justify-center">
								<img
									className="rounded-lg w-full object-cover"
									src="assets/images/team/shridhar.png"
									alt="Shridhar"
								/>
								<h5 className="mt-3">Shridhar Iyer</h5>
								<p>
									<strong>Mechanical Head</strong>
								</p>
								<div className="flex flex-row space-x-3 justify-center items-center">
									<a
										href="https://www.linkedin.com/in/shridhar-iyer-95a03124a"
										target="_blank"
										rel="noreferrer">
										<AiFillLinkedin className="w-6 h-6 rounded-md hover:text-blue-700 text-blue-700" />
									</a>
									<a href="https://github.com/Srdr16" target="_blank" rel="noreferrer">
										<AiFillGithub className="w-6 h-6 rounded-md hover:text-black text-black" />
									</a>
								</div>
							</div>
							<div className="w-[14rem] h-fit p-3 bg-gray-50 shadow-md shadow-gray-300 rounded-md flex flex-col items-center justify-center">
								<img
									className="rounded-lg w-full object-cover"
									src="assets/images/team/ashutoshR.png"
									alt="AshutoshR"
								/>
								<h5 className="mt-3">Ashutosh Raj</h5>
								<p>
									<strong>Electronics Head</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/ashutosh-raj-0001a1249"
									target="_blank"
									rel="noreferrer">
									<AiFillLinkedin className="w-6 h-6 rounded-md hover:text-blue-700 text-blue-700" />
								</a>
							</div>
							<div className="w-[14rem] h-fit p-3 bg-gray-50 shadow-md shadow-gray-300 rounded-md flex flex-col items-center justify-center">
								<img
									className="rounded-lg w-full object-cover"
									src="assets/images/team/arav.png"
									alt="Arav"
								/>
								<h5 className="mt-3">Arav Shanghavi</h5>
								<p>
									<strong>Coding Head</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/arav-shanghavi-328770204"
									target="_blank"
									rel="noreferrer">
									<AiFillLinkedin className="w-6 h-6 rounded-md hover:text-blue-700 text-blue-700" />
								</a>
							</div>
							<div className="w-[14rem] h-fit p-3 bg-gray-50 shadow-md shadow-gray-300 rounded-md flex flex-col items-center justify-center">
								<img
									className="rounded-lg w-full object-cover"
									src="assets/images/team/nikhilesh.png"
									alt="Nikhilesh"
								/>
								<h5 className="mt-3">Nikhilesh Behuria</h5>
								<p>
									<strong>Management Head</strong>
								</p>
								<div className="flex flex-row space-x-3 justify-center items-center">
									<a
										href="https://www.linkedin.com/in/nikhilesh-behuria/"
										target="_blank"
										rel="noreferrer">
										<AiFillLinkedin className="w-6 h-6 rounded-md hover:text-blue-700 text-blue-700" />
									</a>
									<a href="https://github.com/NikhileshVuk" target="_blank" rel="noreferrer">
										<AiFillGithub className="w-6 h-6 rounded-md hover:text-black text-black" />
									</a>
								</div>
							</div>
							<div className="w-[14rem] h-fit p-3 bg-gray-50 shadow-md shadow-gray-300 rounded-md flex flex-col items-center justify-center">
								<img
									className="rounded-lg w-full object-cover"
									src="assets/images/team/navya.png"
									alt="Navya"
								/>
								<h5 className="mt-3">Navya Agarwal</h5>
								<p>
									<strong>Simulations Head</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/navya-agarwal-3a4848247"
									target="_blank"
									rel="noreferrer">
									<AiFillLinkedin className="w-6 h-6 rounded-md hover:text-blue-700 text-blue-700" />
								</a>
							</div>
							<div className="w-[14rem] h-fit p-3 bg-gray-50 shadow-md shadow-gray-300 rounded-md flex flex-col items-center justify-center">
								<img
									className="rounded-lg w-full object-cover"
									src="assets/images/team/arnavI.png"
									alt="ArnavI"
								/>
								<h5 className="mt-3">Arnav Inamdar</h5>
								<p>
									<strong>Research Head</strong>
								</p>
								<div className="flex flex-row space-x-3 justify-center items-center">
									<a
										href="https://www.linkedin.com/in/arnav-inamdar-29a730229"
										target="_blank"
										rel="noreferrer">
										<AiFillLinkedin className="w-6 h-6 rounded-md hover:text-blue-700 text-blue-700" />
									</a>
									<a href="https://github.com/RedPlastic" target="_blank" rel="noreferrer">
										<AiFillGithub className="w-6 h-6 rounded-md hover:text-black text-black" />
									</a>
								</div>
							</div>
						</div>
						<h2 style={{ paddingTop: "30px", fontFamily: "Montserrat-Bold" }}>Coding</h2>
						<br></br>
						<div data-aos="fade-right">
							<p>
								<i>
									"Everybody should learn to program a computer because it teaches you how to think."
								</i>
							</p>
							<p>
								Programming is an essential part when it comes to handling robots. Our coding subsystem
								links the electronics and mechanical work in coordination, from programming
								microcontroller microcontrollers and processors, interfacing electronics and mechanics,
								neural networks, and deep learning to computer vision and sensing. They work on the
								design and semi/complete automation of processes for reliable control systems.
							</p>
						</div>
						<Row style={{ fontFamily: "Montserrat" }}>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/pranav.jpg" alt="Pranav" />
								<h5>Pranav Menon</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/pranav-menon-41786122a"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/pranavmenon2408" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/sanskriti.png" alt="Sanskriti" />
								<h5>Sanskriti Labroo</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/sanskriti-labroo-a71250238"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/pranavmenon2408" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/tarun.jpg" alt="Tarun" />
								<h5>Tarun Murugan</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/tarun-m-748bab21a?trk=contact-info"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/TarunMurugan" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/triyan.jpg" alt="Triyan" />
								<h5>Triyan Mukherjee</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/triyan-mukherjee-1a46b8247/"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/FallenDeity" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/anirudh.jpg" alt="Anirudh" />
								<h5>Anirudh Swaminathan</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a href="https://github.com/hyperiqn" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/sahil.jpg" alt="Sahil" />
								<h5>Sahil Natikar</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a href="mailto:sahil.natikar@gmail.com" target="_blank" rel="noreferrer">
									<i className="fa fa-envelope-square"></i>
								</a>
							</div>
						</Row>
						<h2 style={{ paddingTop: "30px", fontFamily: "Montserrat-Bold" }}>Mechanical</h2>
						<br></br>
						<div data-aos="fade-right">
							<p>
								<i>
									"No TECH without <strong>MECH</strong>."
								</i>
							</p>
							<p>
								Mechanical work comprises of designing and manufacturing of the robot. Our team works on
								3D modeling, actuator design, real-time constraint simulation, and robust design for
								robots' efficient functioning. Different CAD models are developed for other mechanisms
								and experiments, including real-time testing, simulation, and analysis.
							</p>
						</div>
						<Row style={{ fontFamily: "Montserrat" }}>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/manan.jpg" alt="Manan" />
								<h5>Manan Khandelwal</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/manan-khandelwal-14015026a"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/mananx17" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/apoorv.jpg" alt="Apoorv" />
								<h5>Apoorv Khemani</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/apoorv-khemani-277052237"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/alkemist241" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/neil.png" alt="Neil" />
								<h5>Neil Anthony</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/neil-antony-dsouza-8650a7255"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/neil-antony" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/siddharth.jpg" alt="Siddharth" />
								<h5>Penugonda Siddharth</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="http://linkedin.com/in/siddharth-penugonda-24416a260"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/rohan.jpg" alt="Rohan" />
								<h5>P V Rohan</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="http://linkedin.com/in/rohan-parankusam-venkat-11b15826a"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/hriday.jpg" alt="Hriday" />
								<h5>Hriday Raizada</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/hriday-raizada-9489b3251"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
						</Row>
						<h2 style={{ paddingTop: "30px", fontFamily: "Montserrat-Bold" }}>Electronics</h2>
						<br></br>
						<div data-aos="fade-left">
							<p>
								<i>
									"You can involve yourself in electronics, computers, puzzles... there's a lot of
									creativity and brain working. There's a lot to model trains that people don't
									realize."
								</i>
							</p>
							<p>
								The electronics subsystem is the central system to function the robot. We work on rapid
								PCB prototyping to interfacing a wide range of sensors to DAQ. From choosing the right
								components to design specificized pieces, we specialize in all. To exclude off-the-shelf
								electronics to make the bot specific, the study is carried out to develop, simulate and
								validate circuits.
							</p>
						</div>
						<Row style={{ fontFamily: "Montserrat" }}>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/mihir.jpg" alt="Mihir" />
								<h5>Mihir Kiran</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/mihir-kiran-kasibhotla-92a15426a"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/mkk48" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/tejas.jpg" alt="Tejas" />
								<h5>Tejas Kodandera</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/mihir-kiran-kasibhotla-92a15426a"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/mkk48" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/ishaan.jpg" alt="Ishaan" />
								<h5>Ishaan Deshmukh</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/ishan-deshmukh-3b7412247"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/Ishan-tron" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
						</Row>
						<h2 style={{ paddingTop: "30px", fontFamily: "Montserrat-Bold" }}>Management</h2>
						<br></br>
						<div data-aos="fade-left">
							<p>
								<i>
									"<strong>Management</strong> is, above all, a practice where art, science, and craft
									meet."{" "}
								</i>
							</p>
							<p>
								Management subsystem deals with finances and sponsorship, advertisement, and graphics.
								Our team works for the competent functioning of the whole student project maintaining
								harmony amongst all the subsystems. Public relations and human resources are also a part
								of our responsibilities. Operations, business management, strategic planning, and
								web/app development are our specializations.
							</p>
						</div>
						<Row style={{ fontFamily: "Montserrat" }}>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/dhruv.jpg" alt="Dhruv" />
								<h5>Dhruv Mehta</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/dhruv-mehta-2644a2251/"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/NikhileshVuk" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/pratyush.jpg" alt="Pratyush" />
								<h5>Pratyush Agrawal</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/pratyush-agrawal-054292243/"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/pratyushagrawal01" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/milind.png" alt="Milind" />
								<h5>Milind Kiran</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/milind-kiran-25414124b/"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/sannidhi.jpg" alt="Sannidhi" />
								<h5>Sannidhi D Math</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/milind-kiran-25414124b/"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/Sannidhi20040" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/madhav.jpg" alt="Madhav" />
								<h5>Madhav Kumar</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a href="mailto:madhavkumar0211@gmail.com" target="_blank" rel="noreferrer">
									<i className="fa fa-envelope-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/ojasvi.jpg" alt="Ojasvi" />
								<h5>Ojasvi Omjith</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/ojasvi-ohmjith-525373288"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
						</Row>
						<h2 style={{ paddingTop: "30px", fontFamily: "Montserrat-Bold" }}>
							Advanced Robotics Research
						</h2>
						<br></br>
						<div data-aos="fade-right">
							<p>
								<i>
									"There is an endless number of things to discover about robotics. A lot of it is
									just too fantastic for people to believe."
								</i>
							</p>
							<p>
								Advanced Robotics Research is the novel subsystem of our student project. The subsystem
								deals with conceptualizations of robotics with other advanced technologies. We work on
								the research and development of this vast art of building and working robots. ARR is the
								new way to unveil the skillset of our team and challenge the minds of innovation.
							</p>
						</div>
						<Row style={{ fontFamily: "Montserrat" }}>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/omer.png" alt="Omer" />
								<h5>Omer Mohuiddin</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/omer-mohammed-594482260"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/skyequack" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/shivarth.png" alt="Shivarth" />
								<h5>Shivarth Rai</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/shivarth-rai-1496a4268/"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
								<a href="https://github.com/Shvrth" target="_blank" rel="noreferrer">
									<i className="fa fa-github-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/srikar.png" alt="Srikar" />
								<h5>Srikar Bharadwaj</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/srikar-bharadwaj-r-602341248/"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/aryaman.jpg" alt="Aryaman" />
								<h5>Aryaman Gupta</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/in/aryaman-gupta-72319b269"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
							<div className="col-xs-12 col-md-3 profile">
								<img src="assets/images/team/preetham.jpg" alt="Preetham" />
								<h5>Sai Preetham Gajulapalle</h5>
								<p>
									<strong>Member</strong>
								</p>
								<a
									href="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
						</Row>
					</div>
				</Container>
				<Footer />
			</div>
		</div>
	);
}

export default Team;
