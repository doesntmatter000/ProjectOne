import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img4 from "../assets/img4.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Hero
                hero="mid"
                img={img4}
                title="Contact"
                btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Contact;