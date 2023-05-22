import React, {useState} from 'react';
import './NavbarStyle.css'
import {Link} from "react-router-dom";

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <nav className="NavbarItems">
            <h1 className="Navbar-logo">Trippy</h1>
            <div onClick={() => handleClick()} className="menu-icons">
                <i className={click ? "fa fa-times" : "fa fa-bars"}/>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" className="nav-links"><i className="fa-solid fa-house-user"></i>Home</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-links"><i className="fa-solid fa-circle-info"></i>About</Link>
                </li>
                <li>
                    <Link to="/service" className="nav-links"><i className="fa-solid fa-briefcase"></i>Services</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-links"><i className="fa-solid fa-address-book"></i>Contact</Link>
                </li>
                <li>
                    <a className="nav-links-mobile">Sign Up</a>
                </li>
                <button>Sign Up</button>
            </ul>
        </nav>
    );
};

export default Navbar;