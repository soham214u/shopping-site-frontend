import React, { useState, useEffect } from 'react';
import CartItems from "../components/CartItems";
import axios from "axios";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const res = await axios.get("http://localhost:4000/cart");

      const cartItems = res.data.items;

      setCartItems(cartItems);
    } catch (error) {
      console.log("Unable to fetch cart items:", error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/cart/${productId}`);
      alert("Product removed from cart successfully.");
      fetchCartItems();
    } catch (error) {
      alert("Unable to remove product from cart.");
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            <CartItems 
              productImg={item.imgUrl}
              title={item.title}
              price={item.price}
            />
            <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
            <button>Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart;