import React from "react";
import './Footer.css'
import logo from "../Assets/logo.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer-copyright">
                <p>© 2023 Swasth Biotech Pvt. Ltd.</p>
            </div>

        </div>
    )
}

export default Footer;