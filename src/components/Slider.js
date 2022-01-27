import React from "react";
import "./../assets/css/slider.css";
import sample from '../assets/video/sample.mp4'
import poster from '../assets/images/poster.jpg'
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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikivoyage/en/thumb/d/da/RomanEmpireBanner1.jpg/1200px-RomanEmpireBanner1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/36500/1200x400px-Travel-lp.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      {/* <AutoplaySlider
    play={true}
    cancelOnInteraction={true}
    interval={2000}
    className="index"
  >
    <div className="w-auto z-0" data-src="https://www.teahub.io/photos/full/335-3358644_travel-agency-background-hd.jpg" >
      <h1 className="text-black">Heloo</h1>
      <button className="rounded-full drop-shadow text-blue-500 font-bold p-2 border-1 hover:text-gray-600 bg-white">View Post</button>
    </div>
    <div className="w-auto z-0" data-src="https://www.teahub.io/photos/full/60-605021_travel-wallpaper-amazing-4k-ultra-hd-travel-pictures.jpg" >
    <h1 className="text-black">Heloo</h1>
      <button className="rounded-full drop-shadow text-blue-500 font-bold p-2 border-1 hover:text-gray-600 bg-white">View Post</button>
    </div>
    <div className="w-auto z-0" data-src="https://www.itl.cat/pngfile/big/46-466252_travel-hiking-hd.jpg" >
    <h1 className="text-black">Heloo</h1>
      <button className="rounded-full drop-shadow text-blue-500 font-bold p-2 border-1 hover:text-gray-600 bg-white">View Post</button>
    </div>
    <div className="w-auto z-0" data-src="https://www.wallpapers4u.org/wp-content/uploads/taj_mahal_agra_india_mausoleum_mosque_10904_1920x1080.jpg" >
    <h1 className="text-black">Heloo</h1>
      <button className="rounded-full drop-shadow text-blue-500 font-bold p-2 border-1 hover:text-gray-600 bg-white">View Post</button>
    </div>
  </AutoplaySlider> */}
      {/* <section className="" id="banner">
        <video className="" id="videobcg" autoPlay loop muted poster={poster}>
          <source src={sample} type='video/mp4' />
        </video>
        <div className="text-center">
          <h1 id="fancy-text">Fancy Keeping Track Of Time</h1>
          <p className="text-white fs-2 fw-regular" id="">We Have The Perfect Solution For You.</p>
        </div>
      </section> */}
    </div>
  );
};

export default Slider;
