import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return( 
         <section className="active header background-image" id="home">
             
             <div className="header-logo">
                <div className="logo1 background-image"></div>
                <div className="logo2 background-image"></div>
                <div className="center-scroll background-image">
                    <div className="vertical-line" style={{display:"block"}}></div>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}></Link>
                </div>
            </div>
        </section>
    )
};
export default Header;

