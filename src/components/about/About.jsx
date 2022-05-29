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
                            <small>8 Months</small>
                        </article>

                        <article className="about__card">
                            <AiFillCode className="about__icon"/>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>

                    </div>
                        <p>
                        I'm a third year, international, student in Software Engineering at the University of Ottawa. 
                        Extremely passionate about what I do, I always do my best to excel at it and give it my all.
                        I also enjoy some kind of challenge in whatever I do
                        so I'm always looking for new opportunities to grow and develop new skills !
                        </p>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>

                    
                </div>
            </div>
        </section>
    )
}

export default About