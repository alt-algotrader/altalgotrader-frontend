import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="navbar__logo">ALT</div>
            </Link>
            <div className="navbar__buttons">
                <Link to="blog">
                    <div className="navbar__buttons--btn">Blog</div>
                </Link>
                <div className="navbar__buttons--btn">Data</div>
                <div className="navbar__buttons--btn">Backtest</div>
            </div>
            <div className="navbar__states"></div>
        </div>
    );
};

export default Navbar;