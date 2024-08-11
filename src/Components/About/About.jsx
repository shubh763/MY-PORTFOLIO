import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import shubh_img from "../../assets/DP.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={shubh_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a Frontend Developer with over a decade of professional expertise in the field.</p>
            <p>Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%" }}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%" }}/></div>
            <div className="about-skill"><p>ReactJS</p><hr style={{width: "50%" }}/></div>
            <div className="about-skill"><p>Linux</p><hr style={{width: "50%" }}/></div>
            <div className="about-skill"><p>Git & Github</p><hr style={{width: "50%" }}/></div>

          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF PROJECT EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
