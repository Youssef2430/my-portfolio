import React from "react";
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.png"

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Chat with your PDFs",
        github: "https://github.com/Youssef2430/chat-with-pdfs",
        demo: "https://chat-with-your-pdfs-youssef.streamlit.app/#chat-with-pdfs"
    },
    {
        id: 2,
        image: IMG2,
        title: "Compressor",
        github: "https://github.com/Youssef2430/Compressor",
    },
    {
        id: 3,
        image: IMG3,
        title: "Hotel Chain",
        github: "https://github.com/Youssef2430/hotel_chain",
    },
    {
        id: 4,
        image: IMG4,
        title: "Space Invaders",
        github: "https://github.com/Youssef2430/Space-invaders",
    },
    {
        id: 5,
        image: IMG5,
        title: "Work It Out!",
        github: "https://github.com/Youssef2430/work-it-out",
        demo: "https://work-it-out.netlify.app/"
    },
    {
        id: 6,
        image: IMG6,
        title: "VR sensibilisation game",
        github: "https://github.com/mdery022/GNG2501_Project",
    }
]

const Quotes = () => {
    return (
        <section id="quotes">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        if (demo) {
                            return(
                                <article key={id} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={github} className="btn btn-primary" target={"_blank"}>Github</a>
                                        <a href={demo} className="btn btn-secondary" target={"_blank"}>Demo</a>
                                    </div>
                                </article>
                            )
                        }else {
                            return(
                                <article key={id} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={github} className="btn btn-primary" target={"_blank"}>Github</a>
                                    </div>
                                </article>
                            )
                        }
                    })
                }

                
            </div>
        </section>
    )
}

export default Quotes