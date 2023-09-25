import React from "react";
import "../styles/CarListing.css";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet.js";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import CarItem from "../components/UI/CarItem/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <>
      <Helmet title="Cars">
        <CommonSection title="Cars" />
        <section>
          <Container>
            <Row>
              {carData.map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default CarListing;
