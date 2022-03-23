import React from 'react';

const  Navbar = (props) =>  {
    return (
         <div className="navbar">
            <ul>
                <li><a>Home</a></li>
                <li><a>O nas</a></li>
                <li><a>Nasze zajęcia</a></li>
                <li><a>Grafik Zajęć</a></li>
                <li><a>Regulamin</a></li>
                <li><a>Kontakt</a></li>
            </ul>
        </div>
    )
};
 
export default Navbar;