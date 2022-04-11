import React from 'react';

const Footer = () => {
    return( 
        <section className="content footer background-image">
            <div className="contact-sheet">
                <div className="logo background-image"></div>
                <a className="adress"> Siemianowicka 84, <br/>Bytom</a>
                <br/><br/> <a href="https://www.google.pl/maps/place/
                Siemianowicka+84,+41-902+Bytom/@50.344539,18.9470145,246a,43.9y,184.49h,44.91t/
                data=!3m1!1e3!4m5!3m4!1s0x4716d31b9f75c1c9:0x2a6359c0c587c47b!8m2!3d50.3419447!4d18.9461527?ucbcb=1">
                    Zobacz na mapie
                </a>
            </div>
        </section>
    )
};

export default Footer;