import React from 'react';
import "../styles/ProductDisplay.css";

const ProductDisplay = ({productImg, title, description, price}) => {
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={productImg} alt="" />
          <img src={productImg} alt="" />
          <img src={productImg} alt="" />
          <img src={productImg} alt="" />
        </div>
        <div className="product-display-img">
          <img className="product-display-main-img" src={productImg} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{title}</h1>
        <div className="product-display-right-stars">
          <img src="https://www.jiomart.com/assets/ds2web/jds-icons/web-star-filled-icon.svg" alt="" />
          <img src="https://www.jiomart.com/assets/ds2web/jds-icons/web-star-filled-icon.svg" alt="" />
          <img src="https://www.jiomart.com/assets/ds2web/jds-icons/web-star-filled-icon.svg" alt="" />
          <img src="https://www.jiomart.com/assets/ds2web/jds-icons/web-star-filled-icon.svg" alt="" />
          <img src="https://www.jiomart.com/assets/ds2web/jds-icons/web-half-star-filled-icon.svg" alt="" />
          <p>(102)</p>
        </div>
        <div className="product-display-right-price">
          <p>&#8377; {price}</p>
        </div>
        <div className="product-display-right-description">
          <h2>Description</h2>
          <p>{description}</p>
        </div>
        <div className="product-display-right-btn">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay;