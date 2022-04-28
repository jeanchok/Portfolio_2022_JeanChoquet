import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className='snip1198'>
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