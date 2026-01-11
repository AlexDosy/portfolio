import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home">Alex D V</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
