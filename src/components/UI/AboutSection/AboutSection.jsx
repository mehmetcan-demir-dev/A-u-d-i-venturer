import React from "react";
import "./AboutSection.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <>
      <section
        className="about__section"
        style={
          aboutClass === "aboutPage"
            ? { marginTop: "0px" }
            : { marginTop: "280px" }
        }
      >
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__section-content">
                <h4 className="section__subtitle">About Us</h4>
                <h2 className="section__title">Are you ready to adventure?</h2>
                <p className="section__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  quae qui earum adipisci obcaecati consequuntur modi, sit
                  molestiae dicta. Rem vel, dolore quibusdam quod velit nemo sed
                  molestias quas, explicabo modi id accusamus minima iure dicta,
                  ab porro cum minus?
                </p>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description  d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line" />
                    Lorem ipsum dolor sit amet.
                  </p>
                  <p className="section__description  d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line" />
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description  d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line" />
                    Lorem ipsum dolor sit amet.
                  </p>
                  <p className="section__description  d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line" />
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="bmw" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;
