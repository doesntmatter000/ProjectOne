import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img3 from "../assets/img3.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
    return (
        <div>
            <Navbar/>
            <Hero
                hero="mid"
                img={img3}
                title="Service"
                btnClass="hide"
            />
            <Trip/>
            <Footer/>
        </div>
    );
};

export default Service;