import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return( 
         <div className="active header background-image">
             
             <div className="header-logo">
                <div className="logo1 background-image"></div>
                <div className="logo2 background-image"></div>
                <div className="vertical-line" style={{display:"block"}}></div>
                <div className="center-scroll background-image">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}></Link>
                </div>
            </div>
        </div>
    )
};
export default Header;

