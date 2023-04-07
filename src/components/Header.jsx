import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
};

export default Header;