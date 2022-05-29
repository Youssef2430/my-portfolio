import React from "react"
import "./portfolio.css"
import {BiCheckDouble} from "react-icons/bi"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My experience</h5>
            <h2>Where I worked</h2>

            <div className="conteiner work__container">
                <article className="work">
                    <div className="work__head">
                        <h3>Web Developer</h3>
                        <h5>May 2022 to Present</h5>
                    </div>

                    <ul className="work__details">
                        <li>
                            <BiCheckDouble className="work__details-icon"/>
                            <p>Programmed and debugged the University's <a href="https://www2.uottawa.ca/faculte-droit/common-law/centre-etudiant/cours/moteur-recherche-cours">course search engine</a>.</p>
                        </li>

                        <li>
                            <BiCheckDouble className="work__details-icon"/>
                            <p>Worked with a team to renew ,build and deploy new University's website.</p>
                        </li>

                        <li>
                            <BiCheckDouble className="work__details-icon"/>
                            <p>Developped User personas, wireframes and UI.</p>
                        </li>
                    </ul>
                </article>

                <article className="work">
                    <div className="work__head">
                        <h3>Project Assistant - Web design</h3>
                        <h5>Jan 2022 to Apr 2022</h5>
                    </div>

                    <ul className="work__details">
                        <li>
                            <BiCheckDouble className="work__details-icon"/>
                            <p>Contributed in the transition from the old University's Website to the <a href="https://www2.uottawa.ca/en">new one</a> until deployment.</p>
                        </li>
                        
                        <li>
                            <BiCheckDouble className="work__details-icon"/>
                            <p>Designed and developped UI of client websites in law sector.</p>
                        </li>

                        <li>
                            <BiCheckDouble className="work__details-icon"/>
                            <p>Automated the data collection process by programming a web scrapper that collected all the needed information from every page on the website and organizes it.</p>
                        </li>
                    </ul>
                </article>

                <article className="work">
                    <div className="work__head">
                        <h3>Data analyst</h3>
                        <h5>May 2021 to Aug 2021</h5>
                    </div>

                    <ul className="work__details">
                        <li>
                            <BiCheckDouble className="work__details-icon"/>
                            <p>Sourced and developped new strategic ways of storing and handling data.</p>
                        </li>
                        
                        <li>
                            <BiCheckDouble className="work__details-icon"/>
                            <p>Managed Data and made sure all systems work perfectly.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Portfolio