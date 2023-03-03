import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [menuClass, setMenuClass] = useState(false);

    const changeClass = () => {
        setMenuClass(!menuClass);
    }

    return (
        <div className="navigation">
            <button className={!menuClass ? "mobileMenu container" : "mobileMenu container change"} onClick={changeClass} aria-label="Open Navigation">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
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
                    to="/projets"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>Projets</li>
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