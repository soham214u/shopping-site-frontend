import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Admin.css";

const Admin = () => {
  return (
    <div className="admin">
        <h2>Welcome Admin!</h2>
        <ul className="pageItems">
            <li>
                <Link to="/create-product">Create Product</Link>
            </li>
            <li>
                <Link to="/product-list">Product List</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default Admin;