import React from 'react';
import './Header.css';
import logo from '../media/logo.png';


export default function Header() {
    return (
        <header className="header">
          <div className="logo text-wrapper">
            <img src={logo} alt="Logo" className="header-logo" />Ordinal Hive
          </div>
          <div className="search-bar text-wrapper-2">
            {/* Input field for searching */}
            <input className="text-wrapper-2" placeholder="Search Bitcoin Buds Collection" />
          </div>
          <nav className="navigation">
            {/* Non-functional placeholders */}
            <a href="#0" className="text-wrapper">Collections</a>
            <a href="#0" className="text-wrapper">Listing</a>
            <a href="#0" className="text-wrapper">Portfolio</a>
          </nav>
          <button className="connect-button">Connect</button>
        </header>
    );
}
