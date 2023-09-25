import React from "react";
import "./OurAdventurers.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../../assets/all-images/ava-1.jpg";
import ava02 from "../../../assets/all-images/ava-2.jpg";
import ava03 from "../../../assets/all-images/ava-3.jpg";
import me from "../../../assets/all-images/me.jpg";

const OUR__ADVENTURERS = [
  {
    name: "Mehmetcan Demir",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "https://twitter.com/_mehmetcandemir",
    linkedinUrl: "https://www.linkedin.com/in/mehmetcan-demir-151a71224",
    imgUrl: me,
  },

  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];
const OurAdventurers = () => {
  return (
    <>
      {OUR__ADVENTURERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__adventurer">
            <div className="single__adventurer-img">
              <img src={item.imgUrl} alt="adventurerImg" className="w-100" />
              <div className="single__adventurer-social">
                <Link to={item.fbUrl} target="_blank">
                  <i className="ri-facebook-line" />
                </Link>
                <Link to={item.twitUrl} target="_blank">
                  <i className="ri-twitter-line" />
                </Link>
                <Link to={item.instUrl} target="_blank">
                  <i className="ri-instagram-line" />
                </Link>
                <Link to={item.linkedinUrl} target="_blank">
                  <i className="ri-linkedin-line" />
                </Link>
              </div>

              <h6 className="text-center mb-0 mt-3">{item.name}</h6>
              <p className="section__description text-center">
                {item.experience}
              </p>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurAdventurers;
