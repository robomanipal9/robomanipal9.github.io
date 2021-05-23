import React, { useState,  useRef } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavHashLink as Link } from 'react-router-hash-link'
import { animateScroll as scroll } from 'react-scroll'
import './dropdown.css';
import { useDetectOutsideClick } from './useDetectOutsideClick';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
	const onClick = () => setIsActive(!isActive);

	const scrollWithOffset = (el, offset) => {
		const elementPosition = el.offsetTop - offset;
		window.scroll({
			top: elementPosition,
			left: 0,
			behavior: "smooth"
		});    
	};

	return (
		<div>
			<Navbar expand="xl" fixed="top" className="bg-black navbar-dark" style={{ fontFamily: 'Montserrat'}}>
				<div onClick={() => scroll.scrollToTop()} className="navbar-brand order-xl-0 mx-auto" style={{padding: '1rem'}}><img alt="logo" id="logo" src="./assets/images/logo2.jpg" style={{height: 50}}></img></div>
				<NavbarToggler onClick={toggle} style={{color: 'white'}}></NavbarToggler>
				<Collapse isOpen={isOpen} navbar className="order-xl-1">
					<Nav className="ml-auto" navbar>
	          <NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">HOME</a>
	          </NavItem>
	          <NavItem className="mx-auto navlink">					
				  		<Link to="/#about" activeClass="active" scroll={el => scrollWithOffset(el, 98)} duration={2000} className="navlink nav-link">ABOUT US</Link>
	          </NavItem>
	          <NavItem className="mx-auto navlink">
	            <a href="/work" className="navlink nav-link">WORK</a>
	          </NavItem>
	        	<NavItem className="mx-auto navlink">
	            <a href="/competition" className="navlink nav-link">COMPETITIONS</a>
	          </NavItem>
	          <NavItem className="mx-auto navlink menu-container">
	            <button onClick={onClick} href="/" className="navlink nav-link menu-trigger">
								TEAM <i className="fa fa-caret-down" />
							</button>
							<nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
								<ul>
									<li><a href="/team">CURRENT TEAM</a></li>
									<li><a href="/alumni">OUR ALUMNI</a></li>
								</ul>
							</nav>
	          </NavItem>
	          <NavItem className="mx-auto navlink">
	            <a href="/gallery" className="navlink nav-link">GALLERY</a>
	          </NavItem>
	          <NavItem className="mx-auto navlink">
							<Link to="/#sponsor" activeClass="active" spy={true} scroll={el => scrollWithOffset(el, 98)} duration={2000} className="navlink nav-link">SPONSORS</Link>	          
			  		</NavItem>
	        	<NavItem className="mx-auto navlink">
							<Link to="/#contact" activeClass="active" spy={true} scroll={el => scrollWithOffset(el, 98)} duration={2000} className="navlink nav-link">CONTACT</Link>	          
						</NavItem>
	        </Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default Header;