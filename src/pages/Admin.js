import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Admin.css";

const Admin = () => {
  return (
    <div>
        <div>
            <ul className="pageItems">
                <li>
                    <Link to="/create-product">Create Product</Link>
                </li>
                <li>
                    <Link to="/update-product">Update Product</Link>
                </li>
                <li>
                    <Link to="/all-products">All Products</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Admin