import React from "react";
import "./Hero.css";
import shubh_img from "../../assets/DP.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={shubh_img} alt="" />
      <h1>
        <span>I'm Shubh,</span> frontend developer based in India.
      </h1>
      <p>
        I had completed my Master's in Computer Application from Chandigarh
        University.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
        <a
            className="anchor-link"
            href="https://github.com/shubh763"
            target="_blank"
            rel="noopener noreferrer"
          >
            MY PROJECTS
          </a>
        </div>
        <div className="hero-resume">
        <a href="/Shubh_Kumar_Profile.pdf" download="Shubh_Kumar_Profile.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
