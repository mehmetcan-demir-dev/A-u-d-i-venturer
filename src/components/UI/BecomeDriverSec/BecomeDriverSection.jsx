import React from "react";
import "./BecomeDriverSection.css";
import { Container, Col, Row } from "reactstrap";
import driverImg from "../../../assets/all-images/toyota-offer-2.png"
const BecomeDriverSection = () => {
  return <>
    <section className="become__driver">
        <Container>
            <Row>
                <Col lg="6" md="6" sm="12" className="become__driver-img">
                    <img src={driverImg} alt="carImg"  className="w-100"/>
                </Col>
                <Col lg="6" md="6" sm="12">
                    <h2 className="section__title become__driver-title">
                        Do you want to adventure with us? So <i>come with us now!</i>
                    </h2>
                    <button className="btn become__driver-btn mt-4">
                        Become an Adventurer
                    </button>
                </Col>
            </Row>
        </Container>
    </section>
  </>;
};

export default BecomeDriverSection;
