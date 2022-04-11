import React, {useState} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
// import { hashLink as Link } from 'react-router-hash-link'

const  Navbar = () =>  {
    
    const [NavScroll, setNavScroll ] = useState(false);
    const colorChange = () => {
        if(window.scrollY>=310) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        };
    }
                
    window.addEventListener('scroll', colorChange);
    return (
         <div className={ !NavScroll ? "navbar" : "navbar navbar-scrolled"}>
            <ul>
                <li>
                    <Link activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={300}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={500}>
                        O nas
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="activities-grid" spy={true} smooth={true} offset={-160} duration={600}>
                        Zajęcia taneczne
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="timetable" spy={true} smooth={true} offset={60} duration={600}>
                    Grafik
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-900} duration={600}>
                    Kontakt
                    </Link> 
                </li>
                <li>
                    <Link activeClass="active" to="rules" spy={true} smooth={true} offset={-60} duration={600}>
                    Regulamin
                    </Link>
                </li>
            </ul>
        </div>
    )
};
 
export default Navbar;