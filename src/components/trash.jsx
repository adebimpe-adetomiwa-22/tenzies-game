import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = (event) => {
        setNavActive((prevNav) => !prevNav);
    };

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav--title">
                    <h2 className="title">Tenzies</h2>
                </div>

                <div className="hamburger" onClick={toggleNav}>
                    <i className="fas fa-bars"></i>
                </div>

                <div
                    className={
                        navActive
                            ? 'nav--links active'
                            : 'nav--links not-active'
                    }
                >
                    <NavLink
                        to="/"
                        className="nav--link"
                        style={({ isActive }) => ({
                            color: isActive ? '#e0a96d' : '#ddc3a5',
                        })}
                    >
                        <p>Home</p>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="nav--link"
                        style={({ isActive }) => ({
                            color: isActive ? '#e0a96d' : '#ddc3a5',
                        })}
                    >
                        <p>About</p>
                    </NavLink>
                    <NavLink
                        to="/instructions"
                        className="nav--link"
                        style={({ isActive }) => ({
                            color: isActive ? '#e0a96d' : '#ddc3a5',
                        })}
                    >
                        <p>Instructions</p>
                    </NavLink>
                    <NavLink
                        to="/leaders-board"
                        className="nav--link"
                        style={({ isActive }) => ({
                            color: isActive ? '#e0a96d' : '#ddc3a5',
                        })}
                    >
                        <p>Leaders board</p>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Navbar);
