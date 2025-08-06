import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>At our university, learning goes beyond textbooks — it’s a journey of curiosity, collaboration, and purpose. We believe education should spark innovation, nurture creativity, and build character. That’s why our classrooms are not just spaces for lectures, but launchpads for ideas that shape the future.</p>
            <p>Rooted in tradition yet driven by progress, we blend academic excellence with real-world exposure. From cutting-edge research labs to cultural festivals, entrepreneurial hubs to global partnerships — our students don’t just earn degrees, they craft stories worth telling. Here, every ambition finds direction, and every voice has the power to lead.</p>
        </div>
    </div>
  )
}

export default About