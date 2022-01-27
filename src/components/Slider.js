import React from "react";
import "./../assets/css/slider.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel className="bg-info">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://vaekstovervand.dk/wp-content/uploads/2017/05/7wonders.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-black fw-bold">Seven Wonders Of The World</h3>
      <p className="text-black">Visit The Worlds Seven Wonders Of The World. And Let The World Know, How Was Your Experiences.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikivoyage/en/thumb/d/da/RomanEmpireBanner1.jpg/1200px-RomanEmpireBanner1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="fw-bold">The Infamous Rome Of Italy</h3>
      <p>Visit The Infamous Rome Of Italy. And Let The World Know, How Was Your Experiences.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/36500/1200x400px-Travel-lp.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Baali Beach Of Indonesia</h3>
      <p>Visit The Infamous Baali Beach Of Indonesia. And Let The World Know, How Was Your Experiences.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Slider;
