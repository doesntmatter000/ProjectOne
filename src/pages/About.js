import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img2 from "../assets/img2.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
    return (
        <div>
            <Navbar/>
            <Hero
                hero="mid"
                img={img2}
                title={"About"}
                btnClass="hide"
            />
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default About;