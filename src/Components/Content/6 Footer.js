import React from 'react';

const Footer = () => {

        const AdressStyle = {
            fontFamily:"Abril Fatface",
            fontSize: "2.3vw",
            letterSpacing: "1px",
            fontWeight: "400",
            margin:"0",
            padding: "0",
            color:"#555555",
            float:"left",
            textAlign: "left",
        }

        const footerStyleMapsDiv = {
            display:"block",
            position:"relative",
            float:"left",
            textAlign:"left",
            width:"100%",
            margin:"30px 0 0 0"
        }
        const footerStyleMaps = {
            color:"rgb(77, 77, 77)",
            width:"100%",
            marginTop:"60px",
            fontSize: "18px",
            fontWeight: "100",
        }
        const contactPhoneStyleDiv = {
            float:"left",
            width:"100%",
            margin:"80px 0 0 0"
        }
        const contactPhoneStyle = {
            fontWeight:"bold",
            padding:"0",
            margin:"2px",
            width:"100%",
            textAlign:"left",
            color:"rgb(187, 141, 118)",
            fontFamily:"sans-serif",
            fontWeight:"500",
            fontSize:"24px",
    }
        const contactMailStyle = {
            marginTop:"40px",
            color:"rgb(187, 141, 118)",
            fontFamily:"sans-serif",
            float:"left",
            fontSize:"24px",
    }
    return( 
        <section className="content footer background-image">
            <div className="contact-sheet">
                <div className="logo background-image"></div>
                <a style={AdressStyle}> Siemianowicka 84, <br/>Bytom</a>
                <div style={footerStyleMapsDiv}>
                    <a style={footerStyleMaps} target="_blank" href="https://www.google.com/maps/place/
                    Siemianowicka+84,+41-902+Bytom/@50.344539,18.9470145,246a,43.9y,184.49h,44.91t/
                    data=!3m1!1e3!4m5!3m4!1s0x4716d31b9f75c1c9:0x2a6359c0c587c47b!8m2!3d50.3419447!4d18.9461527?ucbcb=1">
                    Zobacz na mapie
                </a>
                </div>
                {/* <div style={contactPhoneStyleDiv}>
                    <p style={contactPhoneStyle}>886 097 832 - Kasia</p>
                    <p style={contactPhoneStyle}>503 363 067 - Kamila</p>
                    <p><a href="mailto:hello.saydance@gmail.com" style={contactMailStyle} >hello.saydance@gmail.com</a></p>
                </div> */}
            </div>
        </section>
    )

};

export default Footer;