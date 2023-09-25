import React from "react";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSec/BecomeDriverSection";
import driveImg from "../assets/all-images/drive.jpg";
import OurAdventurers from "../components/UI/OurAdventurers/OurAdventurers";
import "../styles/About.css"
const About = () => {
  return (
    <>
      <Helmet title="About">
        <CommonSection title="About Us" />
        <AboutSection  aboutClass= "aboutPage"/>
        <section className="about__page-section">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12">
                <div className="about__page-img">
                  <img src={driveImg} alt="img" className="w-100 rounded-3" />
                </div>
              </Col>

              <Col lg="6" md="6" sm="12">
                <div className="about__page-content">
                  <h2 className="section__title">
                    We're Committed to Provide Best Adventure Solutions
                  </h2>
                  <p className="section__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veritatis necessitatibus, quibusdam cum ab nisi vel corrupti
                    eveniet voluptatibus, tempore magnam omnis magni, velit
                    totam? Ab deserunt cum architecto voluptatibus veniam.
                  </p>
                  <p className="section__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veritatis necessitatibus, quibusdam cum ab nisi vel corrupti
                    eveniet voluptatibus, tempore magnam omnis magni, velit
                    totam? Ab deserunt cum architecto voluptatibus veniam.
                  </p>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <span className="fs-4">
                      <i className="ri-phone-line"></i>
                    </span>
                    <div className="">
                      <h6 className="section__subtitle">Need any advice?</h6>
                      <h4>+905415864067</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <BecomeDriverSection />
        <section>
          <Container>
            <Row>
              <Col lg="12" md="" sm="" className="mb-5 text-center">
                <h6 className="section__subtitle">
                  A-u-d-i-venturer's Experts
                </h6>
                <h2 className="section__title">Our Adventurers</h2>
              </Col>
              <OurAdventurers />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default About;
