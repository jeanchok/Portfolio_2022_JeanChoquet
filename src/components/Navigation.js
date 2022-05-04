import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [menuClass, setMenuClass] = useState(false);

    const changeClass = () => {
        setMenuClass(!menuClass);
    }

    return (
        <div className="navigation">
            <button className="mobileMenu" onClick={changeClass}>
                {menuClass ? <i className="fas fa-times"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
            </button>
            <ul className={menuClass ? 'snip1198 active' : 'snip1198'} >
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li className='content__item'>
                        <span className='link link--metis'>Accueil</span>
                    </li>
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>Portfolio</li>
                </NavLink>
                <NavLink
                    to="/competences"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>Compétences</li>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;