import {NavLink} from "react-router-dom";

import logo from "../../images/logo.png";
const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <img src={logo} width="146" height="60" alt="Nat geo wild" />
            </NavLink>

            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink to="/" className="navigation__link navigation__link--current">
                            Home
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink to="/" className="navigation__link navigation__link">
                            About us
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink to="/" className="navigation__link navigation__link">
                            Goals
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <ul className="controls">
                <li className="controls__item">
                    <button className="controls__button" type="button">
                        <span className="visually-hidden">Search</span>
                    </button>
                </li>
                <li className="controls__item">
                    <button className="controls__button" type="button">
                        <span className="visually-hidden">Login</span>
                    </button>
                </li>
                <li className="controls__item">
                    <button className="controls__button" type="button">
                        <span className="visually-hidden">Open menu</span>
                    </button>
                </li>
            </ul>
        </header>
    )
};

export default Header;