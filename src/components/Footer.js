import React from 'react';
import "./FooterStyle.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Choose your favourite destinations.</p>
                </div>
                <div className="icons">
                    <a href=""><i className="fa-brands fa-facebook-square"></i></a>
                    <a href=""><i className="fa-brands fa-instagram-square"></i></a>
                    <a href=""><i className="fa-brands fa-behance-square"></i></a>
                    <a href=""><i className="fa-brands fa-twitter-square"></i></a>
                </div>
            </div>
            <div className="bot">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Provacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;