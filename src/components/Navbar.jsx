import React, { useState } from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <p>
        <Link to="/">TechShow</Link>
      </p>
      <div className="menu" 
        onClick={() => {
        setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cart"><FaShoppingCart className="icons" /> cart</Link>
        </li>
        <li>
          <Link to="/admin"><RiAdminFill className="icons" /> Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;