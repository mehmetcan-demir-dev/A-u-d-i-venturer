import React, { useEffect } from "react";
import carData from "../assets/data/carData";
import { Row, Col, Container } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import Booking from "../components/UI/Booking/Booking";
import PaymentMethod from "../components/UI/PaymentMethod/PaymentMethod";

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <>
      <Helmet title={singleCarItem.carName}>
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <img src={singleCarItem.imgUrl} alt="" className="w-100" />
              </Col>

              <Col lg="6">
                <div className="car__info">
                  <h2 className="section__title">{singleCarItem.carName}</h2>
                  <div className="d-flex align-items-center mb-4 mt-3  gap-5">
                    <h6 className="rent__price fw-bolder fs-4">
                      ${singleCarItem.price}.00 / Day
                    </h6>
                    <span className="d-flex align-items-center gap-2">
                      <span style={{ color: "#f9a826" }}>
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                      </span>
                      ({singleCarItem.rating} ratings)
                    </span>
                  </div>

                  <p className="section__description">
                    {singleCarItem.description}
                  </p>

                  <div
                    style={{ columnGap: "4rem" }}
                    className="d-flex align-items-center mt-3"
                  >
                    <span className="section__description d-flex align-items-center gap-1">
                      <i
                        className="ri-roadster-line"
                        style={{ color: "#f9a826" }}
                      />{" "}
                      {singleCarItem.model}
                    </span>

                    <span className="section__description d-flex align-items-center gap-1">
                      <i
                        className="ri-settings-2-line"
                        style={{ color: "#f9a826" }}
                      />{" "}
                      {singleCarItem.automatic}
                    </span>

                    <span className="section__description d-flex align-items-center gap-1">
                      <i
                        className="ri-timer-flash-line"
                        style={{ color: "#f9a826" }}
                      />{" "}
                      {singleCarItem.speed}
                    </span>
                  </div>

                  <div
                    style={{ columnGap: "2.8rem" }}
                    className="d-flex align-items-center mt-3"
                  >
                    <span className="section__description d-flex align-items-center gap-1">
                      <i
                        className="ri-map-pin-line"
                        style={{ color: "#f9a826" }}
                      />{" "}
                      {singleCarItem.gps}
                    </span>

                    <span className="section__description d-flex align-items-center gap-1">
                      <i
                        className="ri-wheelchair-line"
                        style={{ color: "#f9a826" }}
                      />{" "}
                      {singleCarItem.seatType}
                    </span>

                    <span className="section__description d-flex align-items-center gap-1">
                      <i
                        className="ri-building-2-line"
                        style={{ color: "#f9a826" }}
                      />{" "}
                      {singleCarItem.brand}
                    </span>
                  </div>
                </div>
              </Col>

              <Col lg="7" className="">
                <div className="booking__info mt-5">
                  <h5 className="mb-5 fw-bolder">Booking Information</h5>
                  <Booking />
                </div>
              </Col>

              <Col lg="5" className="">
                <div className="payment__info mt-5">
                  <h5 className="mb-5 fw-bolder">Payment Information</h5>
                  <PaymentMethod />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default CarDetails;
