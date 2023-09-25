import React from "react";
import HeroSlider from "../components/UI/HeroSlider/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import FindCarForm from "../components/UI/FindCarForm/FindCarForm";
import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/UI/AboutSection/AboutSection";
import ServicesList from "../components/UI/ServicesList/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSec/BecomeDriverSection";
import Adventurers from "../components/UI/Adventurers/Adventurers";
import BlogList from "../components/UI/BlogList/BlogList";
const Home = () => {
  return (
    <>
      <Helmet title="Home">
        {/* {========== HERO SECTION ==========} */}
        <section className="p-0 hero___slider-section">
          <HeroSlider />
          {/* FIND CAR SECTION */}
          <div className="hero__form">
            <Container>
              <Row className="form__row">
                <Col lg="4" md="4">
                  <div className="find__cars-left">
                    <h3>Find a car for the adventure.</h3>
                  </div>
                </Col>
                <Col lg="8" md="8" sm="12">
                  <FindCarForm />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <AboutSection />
        {/* SERVICES SECTION */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">See Our</h6>
                <h2 className="section__title">Popular Services</h2>
              </Col>
              <ServicesList />
            </Row>
          </Container>
        </section>
        {/* CAR OFFER SECTION */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h6 className="section__subtitle">Come with</h6>
                <h2 className="section__title">Hot Offers</h2>
              </Col>

              {carData.slice(0, 6).map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>

        {/* BECOME A DRIVER SECTION */}
        <BecomeDriverSection />

        {/* ======= TESTIMONALS ======= */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-4 text-center">
                <h6 className="section__subtitle">Adventurers says</h6>
                <h2 className="section__title">Adventurers</h2>
              </Col>
              <Adventurers />
            </Row>
          </Container>
        </section>

        {/* ======= BLOG SECTION ========= */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">Explore Our Adventures</h6>
                <h2 className="section__title">Latest Adventures</h2>
              </Col>
              <BlogList />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
