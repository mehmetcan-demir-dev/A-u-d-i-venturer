import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="logo footer__logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <i className="ri-car-line"></i>
                    <span>
                      Rent a Car
                      <br />
                      Service
                    </span>
                  </Link>
                </h1>
              </div>
              <p className="footer__logo-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                illo amet corrupti aliquid quasi fuga sapiente ab odio magni
                dicta vero alias, eum fugit quibusdam eius laborum et ad animi?
              </p>
            </Col>
            <Col lg="2" md="4" sm="6">
              <div className="mb-4">
                <h5 className="footer__link-title">Quick Links</h5>
                <ListGroup>
                  {quickLinks.map((item, index) => (
                    <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <div className="mb-4">
                <h5 className="footer__link-title mb-4">Head Office</h5>
                <p className="office__info">35660, Menemen, Izmir, Turkey</p>
                <p className="office__info">Phone : +90 541 586 40 67</p>
                <p className="office__info">
                  Email : mehmetcandemir11@outlook.com.tr
                </p>
                <p className="office__info">Office Time: 9am - 6pm</p>
              </div>
            </Col>
            <Col lg="3" md="4"sm="12">
              <div className="mb-4">
                <h5 className="footer__link-title">Newsletter</h5>
                <p className="section__description">Subscribe our newsletter</p>
                <div className="newsletter">
                  <input type="email" placeholder="Email" />
                  <span>
                    <i className="ri-send-plane-line" />
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className="footer__bottom">
                <p className="section__description d-flex align-items-center justify-content-center pt-4">
                  <i className="ri-copyright-line" />
                  Copyright - {currentYear}, Developed by Mehmetcan Demir. All
                  rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
