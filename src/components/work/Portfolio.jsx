import React from "react"
import "./portfolio.css"
import {BiCheckDouble} from "react-icons/bi"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My experience</h5>
            <h2>Where I worked</h2>

            <div className="conteiner work__container">
                <div className="work-holder">
                    <article className="work">
                        <div className="work__head">
                            <h3>Automation Framework Developper</h3>
                            <h4>WindRiver</h4>
                            <h5>Sept 2022 to Dec 2022 / May 2023 to Aug 2023</h5>
                        </div>

                        <ul className="work__details">
                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Spearheaded the development and continuous improvement of a robust automation framework to support the testing and validation of critical applications.</p>
                            </li>
                            
                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Leveraged Django and Angular to enhance a user-friendly dashboard used by 70+ employees, significantly improving productivity and user experience.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Designed and implemented Python-based APIs, resulting in a remarkable 80% optimization in response time and overall application efficiency.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Streamlined the software development lifecycle by creating automated tests, reducing design and test cycles and increasing product reliability.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Actively engaged with cutting-edge, high-performance cloud technologies, staying at the forefront of technological advancements in the industry.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Innovated end-to-end system tests, meticulously validating products to ensure seamless functionality, mirroring customer usage scenarios.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Contributed effectively in an agile development environment, actively participating in all stages of the software development process, including planning, design, implementation, and testing.</p>
                            </li>
                        </ul>
                    </article>
                </div>
                <div className="work-holder">
                    <article className="work">
                        <div className="work__head">
                            <h3>Project Manager - Website Migration</h3>
                            <h4>University of Ottawa</h4>
                            <h5>Jan 2023 to Apr 2023</h5>
                        </div>

                        <ul className="work__details">
                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Led the successful migration and update of a critical search engine utilized by over 2000 students at the University of Ottawa's Faculty of Law.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Developed cutting-edge scripts to significantly enhance the search engine's performance and facilitate seamless data migration at the end of each academic year.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Implemented a robust tracking process, ensuring accurate monitoring and management of crucial information during data migration and system updates.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Innovated and optimized APIs, streamlining data fetching and injection processes, resulting in a smoother and more efficient user experience.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Collaborated closely with cross-functional teams to understand user requirements, translating them into reliable and scalable automation solutions.</p>
                            </li>
                        </ul>
                    </article>

                    <article className="work">
                        <div className="work__head">
                            <h3>Web Developer</h3>
                            <h4>University of Ottawa</h4>
                            <h5>Jan 2022 to Aug 2022</h5>
                        </div>

                        <ul className="work__details">
                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Led the development and upkeep of the University's vital course search engine, ensuring seamless function and top-tier performance.</p>
                            </li>
                            
                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Teamed up with skilled professionals to overhaul, construct, and launch fresh University websites, elevating the online experience for students, faculty, and visitors.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Engaged with clients to grasp unique requirements, offering unwavering technical assistance across the project's life cycle, ensuring triumphant outcomes and satisfied clients.</p>
                            </li>

                            <li>
                                <BiCheckDouble className="work__details-icon"/>
                                <p>Applied web scraping and data automation proficiency to craft an advanced web scraper, simplifying data collection from all website pages and optimizing data organization.</p>
                            </li>
                        </ul>
                    </article>
                </div>
                
                

            </div>
        </section>
    )
}

export default Portfolio