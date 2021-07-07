import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import Aos from "aos"
import "aos/dist/aos.css"

const Vision = () => {

  useEffect(() => {
		Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="vision">
      <Container>
        <div className="col-12">
          <div className="col-12 col-xl-6 visioncomp" style={{ paddingTop: '50px', paddingBottom: '50px', float: 'left', height: '70vh' }}>
            <div data-aos="fade-right" className="col-lg-4 offset-lg-1 col-sm-12" style={{ padding: '20px' }}>
              <h1>DREAM.</h1> 
            </div>
            <div data-aos="fade-right" className="col-lg-4 offset-lg-1 col-sm-12" style={{ padding: '20px' }}>
              <h1>BUILD.</h1>
            </div>
            <div data-aos="fade-right" className="col-lg-4 offset-lg-1 col-sm-12" style={{ padding: '20px' }}>
              <h1>ACHIEVE.</h1>
            </div>
          </div>
          <div className="col-12 col-xl-6" style={{ float: 'right', textAlign: 'center', height: '70vh', paddingTop: '100px' }}>
            <Row className=" justify-content-center visionhead" style={{ paddingTop: '30px', alignItems: 'center' }}>
              <span></span>  
              <h3 style={{color: 'black', fontFamily: 'Montserrat-Bold' }}>   VISION AND MISSION   </h3>
              <span></span>
            </Row>
            <p style={{ fontFamily: 'Montserrat', paddingTop: '30px' }}>
              Our team strongly believes in a future for robotics that will take the world forward with innovative technologies and enrich
              human lives to create a better tomorrow.
            </p>
            <p style={{ paddingBottom:'30px', fontFamily: 'Montserrat' }}>
              As students with unlimited passion for robotics, we indulge ourselves in building robots and compete in some of the toughest
              competitions in the world. Our innovation starts with a DREAM to elucidate problems as we BUILD solutions to ACHIEVE the limitless. 
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Vision
