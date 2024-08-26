// src/components/Header.js
import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    return (
        <nav className='navbar'>
            <div className='logo'>
                <Link to='https://react-travel-app-kappa.vercel.app/' className='logo-link'>#CarRental</Link>
            </div>
            <div className='nav-links'>
                <Link to='/' className={location.pathname === "/" ? "active" : ""} style={{ textDecoration: location.pathname === "/" ? "underline" : "none" }}>Host</Link>
                <Link to='/about' className={location.pathname === "/about" ? "active" : ""} style={{ textDecoration: location.pathname === "/about" ? "underline" : "none" }}>About</Link>
                <Link to='/find-van' className={location.pathname === "/find-van" ? "active" : ""} style={{ textDecoration: location.pathname === "/find-van" ? "underline" : "none" }}>Vans</Link>
            </div>
        </nav>
    );
}

export default Header;
