import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import blogData from "../assets/data/blogData";
import Helmet from "../components/Helmet/Helmet";
import commentImg from "../assets/all-images/ava-1.jpg";
import "../styles/BlogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <>
      <Helmet title={blog.title}>
        <section>
          <Container>
            <Row>
              <Col lg="8" md="8">
                <div className="blog__details">
                  <img src={blog.imgUrl} alt="" className="w-100" />
                  <h2 className="section__title">{blog.title}</h2>

                  <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                    <span className="blog__author">
                      <i className="ri-user-line"></i>
                      {blog.author}
                    </span>

                    <span className="section__description d-flex align-items-center gap-1">
                      <i className="ri-calendar-line"></i> {blog.date}
                    </span>

                    <span className="section__description d-flex align-items-center gap-1">
                      <i className="ri-time-line"></i> {blog.time}
                    </span>
                  </div>

                  <p className="section__description">{blog.description}</p>
                  <h6 className="ps-5 fw-normal">
                    <blockquote className="fs-4">{blog.quote}</blockquote>
                  </h6>
                  <p className="section__description">{blog.description}</p>
                </div>
                <div className="comment__list mt-5">
                  <h4 className="mb-5">3 Comments</h4>

                  <div className="single__comment d-flex gap-3">
                    <img src={commentImg} alt="" />
                    <div className="comment__content">
                      <h6 className="fw-bolder">David Visa</h6>
                      <p className="section__description mb-0">14 July, 2022</p>
                      <p className="section__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore voluptates tenetur nobis blanditiis culpa ut
                        architecto quae eveniet enim incidunt!
                      </p>
                      <span className="replay d-flex align-items-center gap-1">
                        <i className="ri-reply-line" /> Replay
                      </span>
                    </div>
                  </div>
                  {/* ================== COMMENT FORM ============ */}
                  <div className="leave__comment-form mt-5">
                    <h4>Leave a Comment</h4>
                    <p className="section__description">
                      You must sign-in to make or comment a post
                    </p>
                    <Form>
                      <FormGroup className="d-flex gap-3">
                        <Input type="text" placeholder="Full name" />
                        <Input type="email" placeholder="Email" />
                      </FormGroup>
                      <FormGroup>
                        <textarea
                          rows="5"
                          placeholder="Comment..."
                          className="w-100 py-2 px-3"
                        ></textarea>
                      </FormGroup>
                      <button className="post__adventure mt-3">
                        Post an adventure
                      </button>
                    </Form>
                  </div>
                </div>
              </Col>

              <Col lg="4" md="4">
                <div className="recent__adventure  mb-4">
                  <h5 className="fw-500">Recent Adventures</h5>
                </div>
                {blogData.map((item) => (
                  <div className="recent__adventure-post mb-4" key={item.id}>
                    <div className="recent__adventure-item d-flex gap-3">
                      <img
                        src={item.imgUrl}
                        alt="imgUrl"
                        className="w-25 rounded-2"
                      />
                      <h6>
                        <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default BlogDetails;
