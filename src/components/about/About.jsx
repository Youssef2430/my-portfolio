import React from "react";
import "./about.css"
import ME1 from "../../assets/me-about.png"
import {FaAward} from "react-icons/fa"
import {AiFillCode} from "react-icons/ai"

const About = () => {
    return (
        <section id="about">
            <h5>Get To know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME1} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1 Year+</small>
                        </article>

                        <article className="about__card">
                            <AiFillCode className="about__icon"/>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>

                    </div>
                        <p>
                        As a passionate and highly motivated Software Engineering student,
                        I am committed to pursuing a career in the dynamic and ever-evolving technology field. <br/>
                        With a strong interest in the endless possibilities of technology,
                        I am dedicated to applying my skills and knowledge to create innovative solutions that address real-world challenges.
                        </p>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>

                    
                </div>
            </div>
        </section>
    )
}

export default About