import React from 'react';
import { Link } from "react-router-dom";
import "../styles/CategoryCard.css";

const CategoryCard = ({categoryText}) => {
  let categoryRoute;

  switch (categoryText.toLowerCase()) {
    case "smartphones":
      categoryRoute = "/category/smartphones";
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
      <Link to={categoryRoute}>
        <h4>{categoryText}</h4>
      </Link>
    </div>
  )
}

export default CategoryCard;