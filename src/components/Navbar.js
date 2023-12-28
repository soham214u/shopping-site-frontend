import React from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <p>
        <Link to="/">ShopNow</Link>
      </p>
      <ul className="navItems">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;