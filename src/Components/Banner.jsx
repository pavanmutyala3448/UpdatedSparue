import React from "react";
import "./ComponentsStyles/Banner.css";
import banner1 from "../images/banner-1.png";
import banner2 from "../images/banner-2.png";
import banner3 from "../images/banner-3.png";
import banner4 from "../images/banner-4.png";
import Flip from "./banner";
const Banner = () => {
  Flip();
  return (
    <div className="banner">
      <div className="img-slider">
        <div className="slide b active">
          <img id="img-1" src={banner1} alt="" />
        </div>
        <div className="info">
          <h2>Slide 01</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="slide">
          <img id="img-1" src={banner2} alt="" />
        </div>
        <div className="info">
          <h2>Slide 02</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="slide b">
          <img id="img-1" src={banner3} alt="" />
        </div>
        <div className="info">
          <h2>Slide 03</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="triangle">
            <h3>sparue</h3>
          </div>
        </div>

        <div className="slide">
          <img id="img-1" src={banner4} alt="" />
        </div>
        <div className="info">
          <h2>Slide 04</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="navigation">
          <div className="b-tn active"></div>
          <div className="b-tn"></div>
          <div className="b-tn"></div>
          <div className="b-tn"></div>
          <div className="b-tn"></div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
