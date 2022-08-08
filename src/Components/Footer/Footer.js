import React from "react";
import './Footer.css';

import medal from '../../images/Medalla_abejil.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--img--container">
                <img className="footer--img" src={medal} alt='medalla abejil'></img>
            </div>
        </div>
    );
}


export default Footer;