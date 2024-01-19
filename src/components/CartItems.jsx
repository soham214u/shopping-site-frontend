import React from 'react';
import "../styles/CartItems.css";

const CartItems = ({ productImg, title, price }) => {
  return (
    <div className="cart-items">
        <div className="cart-items-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
        </div>
        <div className="cart-items-sub">
            <img src={productImg} alt="" />
            <p>{title}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default CartItems;