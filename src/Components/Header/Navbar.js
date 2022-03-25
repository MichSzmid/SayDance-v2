import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const  Navbar = (props) =>  {
    return (
         <div className="navbar">
            <ul>
                <li>
                    <Link activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={300}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={600}>
                        O nas
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="activities" spy={true} smooth={true} offset={-80} duration={600}>
                        Zajęcia taneczne
                        </Link>
                </li>
                <li>
                    <Link activeClass="active" to="timetable" spy={true} smooth={true} offset={-80} duration={600}>
                    Grafik
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={600}>
                    Kontakt
                    </Link> 
                </li>
                <li>
                    <Link activeClass="active" to="rules" spy={true} smooth={true} offset={-80} duration={600}>
                    Regulamin
                    </Link>
                </li>
            </ul>
        </div>
    )
};
 
export default Navbar;