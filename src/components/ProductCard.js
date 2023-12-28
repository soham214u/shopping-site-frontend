import React from 'react';
import "../styles/ProductCard.css";

const ProductCard = ({productImg, title, price}) => {
  return (
    <div className="product-card">
      <section>
        <img src={productImg} alt="" />
      </section>
      <p>{title}</p>
      <p>&#8377; {price}</p>
      <section>
        <button>Add To Cart</button>
        <button>Buy Now</button>
      </section>
    </div>
  )
}

export default ProductCard;