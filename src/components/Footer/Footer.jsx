import React from "react";
import './Footer.css'
import '../../data/logo'
const LOGO_KEY = 'LOGO'
const logos = JSON.parse(localStorage.getItem(LOGO_KEY) || [])
function Footer() {
    return (
        <div id="footer">
                <div className="logos">
                {logos.map((logo, index) => (
                    <div key={index} className="logo__item">
                        <img src={logo.image} alt="" />
                    </div>
                ))}
            </div>  
            <hr />
            <div className="footer__info">
                <div className="footer__info__social">
                    <a href="/"><i className="fa-brands fa-youtube"></i></a>
                    <a href="/"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="footer__info__inc">
                    <p>© 2022 Acer Inc.</p>
                    <p>Intel, the Intel Logo, Intel Inside, Intel Core, and Core Inside are trademarks of Intel Corporation or its subsidiaries in the U.S. and/or other countries.</p>
                </div>
                <div className="footer__info__region">
                    <a href="/">
                        <i className="fa-solid fa-earth-asia"></i>
                        <p>Vietnam</p>
                    </a>              
                </div>
            </div>      
        </div>
    )
}
export default Footer