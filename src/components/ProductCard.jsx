import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/ProductCard.css";

const ProductCard = ({ productId, productImg, title, price }) => {
  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:4000/cart", { productId });

      alert("Product added to cart successfully.");
    } catch (e) {
      console.error(e);
      alert("Unable to add product to cart.");
    }
  };

  return (
    <div className="product-card">
      <section>
        <Link to={`/product-details/${productId}`}>
          <img src={productImg} alt="" />
        </Link>
      </section>
      <p>{title}</p>
      <p>&#8377; {price}</p>
      <section>
        <Link to="/cart">
          <button onClick={handleAddToCart}>Add To Cart</button>
        </Link>
        <button>Buy Now</button>
      </section>
    </div>
  )
}

export default ProductCard;