import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'rgb(85, 85, 85)',
    fontSize: '0.9rem',
  };
  return (
    <div className="header-container">
      <ul className="header">
        <li className="header-item">Bookstore CMS</li>
        <li>
          <NavLink style={linkStyle} to="/">
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <span className="logo">&#x1F464;</span>
    </div>
  );
};

export default Navbar;
