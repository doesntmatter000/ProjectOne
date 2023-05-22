import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img1 from "../assets/Img1.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero
                img={img1}
                hero="hero"
                title={"Your Journey You Story"}
                text={"Choose Your Favorite Destinaiton."}
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </div>
    );
};

export default Home;