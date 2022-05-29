import React from "react";
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Post-It!",
        github: "https://github.com/Youssef2430/Post-it",
        demo: "https://github.com"
    },
    {
        id: 2,
        image: IMG2,
        title: "Compressor",
        github: "https://github.com/Youssef2430/Compressor",
        demo: "https://github.com"
    },
    {
        id: 3,
        image: IMG3,
        title: "Synthax analyser",
        github: "https://github.com/Youssef2430/Regular-expression-matching",
        demo: "https://github.com"
    },
    {
        id: 4,
        image: IMG4,
        title: "MyLibrary",
        github: "https://github.com/Youssef2430/My-Library",
        demo: "https://github.com"
    },
    {
        id: 5,
        image: IMG5,
        title: "Quick-Fix",
        github: "https://github.com/Youssef2430/Quick-Fix",
        demo: "https://github.com"
    },
    {
        id: 6,
        image: IMG6,
        title: "Space Invaders",
        github: "https://github.com/Youssef2430/Space-invaders",
        demo: "https://github.com"
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
                    })
                }

                
            </div>
        </section>
    )
}

export default Quotes