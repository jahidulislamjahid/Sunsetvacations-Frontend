import React from "react";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const HeroBanner = () => {
  return (
    <AutoplaySlider
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
  </AutoplaySlider>
    // <section className="hero-section">
    //   <Bounce left>
    //     <div className="flex flex-col items-center justify-center h-full">
    //       <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">
    //         the best Phone <br />
    //          for pros
    //       </h1>
    //       <p className="my-2 font-primary text-gray-400 text-center text-sm w-96 select-none">
    //       A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life.
    //       </p>
    //       <Link to="/explore">
    //         <button className="btn-primary-2 w-36 mt-5">Explore More</button>
    //       </Link>
    //     </div>
    //   </Bounce>
    // </section>
  );
};

export default HeroBanner;
