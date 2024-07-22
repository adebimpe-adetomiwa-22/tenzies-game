import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InfoContext } from '../contexts/InfoContext';

const Navbar = () => {
    const { setUser } = useContext(InfoContext);
    const [navActive, setNavActive] = useState(false);

    const toggleNav = (event) => {
        setNavActive((prevNav) => !prevNav);
    };

    const logout = (event) => {
        setUser('');
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
                        to="/tenzies-game"
                        className={({ isActive }) =>
                            isActive ? 'nav--link active' : 'nav--link'
                        }
                    >
                        <p>Home</p>
                    </NavLink>
                    <NavLink
                        to="/tenzies-game/about"
                        className={({ isActive }) =>
                            isActive ? 'nav--link active' : 'nav--link'
                        }
                    >
                        <p>About</p>
                    </NavLink>
                    <NavLink
                        to="/tenzies-game/instructions"
                        className={({ isActive }) =>
                            isActive ? 'nav--link active' : 'nav--link'
                        }
                    >
                        <p>Instructions</p>
                    </NavLink>
                    {/* <NavLink
                        to="/tenzies-game/leaders-board"
                        className={({ isActive }) =>
                            isActive ? 'nav--link active' : 'nav--link'
                        }
                    >
                        <p>Leaders board</p>
                    </NavLink> */}
                    <NavLink
                        onClick={logout}
                        // to="/tenzies-game/leaders-board"
                        className="text-wine-primary tranistion hover:text-wine-tertiary"
                    >
                        <p>Logout</p>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Navbar);
