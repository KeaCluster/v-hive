import React from "react";
import './Header.css'
import medal from '../../images/Medalla_abeja_reina.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header--img--container">
                <img className="header--img" src={medal} alt="v">
                </img>
            </div>
            <h1 className="header--txt txt--primary">V-Hive</h1>
        </div>
    )

}

export default Header;