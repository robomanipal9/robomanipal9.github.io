import React from 'react';

const Footer = () => {
	return (
    <div className="container-fluid">
		  <div className="row footer">
  			<div className="col-12 col-md-8 text-center mx-auto">
        <img src='assets/images/rm_logo.png' className="footerimg" alt="RM Logo" />
        <img src='assets/images/mahe.png' className="footerimg" alt="MAHE Logo" />
          <div className="row justify-content-center" style={{ paddingTop: '20px' }}>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/RoboManipal" className="btn-lg" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/team.robomanipal?igshid=dw2nx6r5lcdb" className="btn-lg" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/robomanipal/" className="btn-lg" target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.youtube.com/channel/UCTbPo4SEzAb_BtcKik-hGpA" className="btn-lg" target="_blank" rel="noreferrer">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>
          <p style={{color: '#FFF', fontFamily: 'Montserrat' }}>© 2021 Team RoboManipal</p>
        </div>
		  </div>
    </div>
	)
}

export default Footer;