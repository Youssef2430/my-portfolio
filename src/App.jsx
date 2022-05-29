import React from "react";
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/work/Portfolio"
import Quotes from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer";



const App = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Portfolio></Portfolio>
            <Quotes></Quotes>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default App