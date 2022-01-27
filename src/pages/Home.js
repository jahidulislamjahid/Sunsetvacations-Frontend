import React from "react";
import { Accordion, Button, Col, Container, FormControl, InputGroup, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product.js";
import Slider from "../components/Slider.js";
import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";
import collection1 from "./../assets/images/collection/1.jpg";
import collection2 from "./../assets/images/collection/2.jpg";
import collection3 from "./../assets/images/collection/3.webp";
import collection4 from "./../assets/images/collection/4.jpg";
import Bounce from "react-reveal/Bounce";
import faq from '../assets/images/faq.jpg'
import Testimonials from "../components/Testimonials.js";
import useContexts from "../hooks/useContexts.js";
const Home = () => {
  const { email, logout, loading, photoURL, displayName } = useContexts();
  const products = useProducts();
  const goPost = () => {
    window.location.href='/dashboard/addProduct'
  }
  const goLog = () =>{
    window.location.href='/login'
  }
  return (
    <div>
      <Slider />
      <Container className="collections my-5 mx-auto">
        <Bounce bottom cascade>
          <h2 className="text-center feature">Top Rated Places</h2>
        </Bounce>
        <p
          style={{ maxWidth: "650px" }}
          className="text-center mb-2 mx-auto mt-3"
        >
          <Bounce>
            These are some of the top rated places where people visit most for quinching their thrust.
          </Bounce>
        </p>
        <Row className="mx-0">
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img">
              <img className="img-fluid ms-0 ps-0" src={collection1} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection2} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection3} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Bounce bottom cascade>
          <h2 className="text-center feature">FEATURED POSTS</h2>
          <p style={{ maxWidth: "650px" }} className="text-center mx-auto mt-3">
            {" "}
            Below you will find Some Recent Posted Places.
          </p>
        </Bounce>
        {!products.length ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5 mt-3">
              Explore all posts
            </button>
          </Link>
        </div>
      </Container>
      <Testimonials />
      {/* experiences sharing */}
      <div className="container mt-4 text-center">
        <h1 style={{ fontFamily: "cursive" }}>Share Your Experiences</h1>
        <Row>
          <Col xs={12} md={6}>
            <img className="w-100" src={faq} alt="" />
          </Col>
          <Col xs={12} md={6} className="pt-5 mt-5 mb-3">
            <div>
              <h2 style={{ fontFamily: "gabriola", fontWeight: "bold" }}>Have any Experience Of such Travel?</h2>
              <h3 style={{ fontFamily: "gabriola", fontWeight: "bold" }}>Share Your Experiences with Everyone.</h3>
              <img className="w-75" src="https://img.freepik.com/free-vector/online-app-tourism-traveler-with-mobile-phone-passport-booking-buying-plane-ticket_74855-10966.jpg?size=626&ext=jpg" alt="" />
            </div>
      {email ? (
      <button className="btn btn-primary text-white" onClick={goPost}>instant post</button>) : (<button className="btn btn-primary text-white" onClick={goLog}>instant post</button>)}
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#eeeeee", boxShadow: "(3px 3px 1px rgb(5, 42, 66))", height: "15em", color: "white" }}>
        <h1 style={{ fontFamily: "cursive", paddingTop: "1em", textAlign: "center", color: "black" }}>Subscribe To Our Newslater.</h1>
        <div className="container">
          <InputGroup className="my-3 px-5 ">
            <FormControl
              className="input-newslater"
              style={{ marginLeft: "5em" }}
              placeholder="Your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" style={{ marginRight: "5em", backgroundColor: "black" }} className="input-newslater">
              Subscribe
            </Button>
          </InputGroup>
        </div>

      </div>
    </div>
  );
};

export default Home;
