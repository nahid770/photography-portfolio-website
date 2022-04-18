import React from 'react';
import './About.css'
import me from '../../Image/Me/me.png'

const About = () => {
    return (
        <div className='container about-me'>
            <img src={me} alt="" />
            <h3 className='text-white'>Nur Alam Nahid</h3>
            <p className='text-dark'>Hey! It's me Nahid. I am a Web development learner. My mail goal and my passion is only to became a Expert FUll Stack Web Developer. I practice everyday and a minimum about 8/10 hours a day. I will try my best to reach my goal. I made my routine and a roadmap for learning web development.</p>
            <h4 >Dream to became a  <span className='mern '>MERN STACK DEVELOPER</span></h4>
            
        </div>
    );
};

export default About;