import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'rgb(78, 160, 236)',
  };
  return (
    <>
      <ul className="header">
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
      <h2 className="title">Books Store</h2>
    </>
  );
};

export default Navbar;
