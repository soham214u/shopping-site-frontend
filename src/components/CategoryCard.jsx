import React from 'react';
import { Link } from "react-router-dom";
import "../styles/CategoryCard.css";

const CategoryCard = ({categoryImg, categoryText}) => {
  let categoryRoute;

  switch (categoryText.toLowerCase()) {
    case "mobiles":
      categoryRoute = "/category/mobiles";
      break;

    case "headphones":
      categoryRoute = "/category/headphones";
      break;

    case "smartwatches":
      categoryRoute = "/category/smartwatches";
      break;
    
    default:
      categoryRoute = "/";
  }

  return (
    <div className="category-card">
      <section>
        <img src={categoryImg} alt="" />
      </section>
      <Link to={categoryRoute}>
        <h4>{categoryText}</h4>
      </Link>
    </div>
  )
}

export default CategoryCard;