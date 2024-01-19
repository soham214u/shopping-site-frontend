import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import "../styles/CategoryOne.css";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/mobiles");

  const data = res.data;

  console.log(data);

  return data;
}

const CategoryOne = () => {
  const [productData, setProductData] = useState([]);

  const assignData = async () => {
    const fetchedProductData = await fetchProducts();

    setProductData(fetchedProductData);
  }

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div className="category-one-div">
      <h2>Mobiles</h2>
      <section className="category-one-products">
        {
          productData.map((product) => {
            return (
              <ProductCard 
                productImg={product.imgUrl} 
                title={product.title} 
                price={product.price} 
              />
            )
          })
        }
      </section>
    </div>
  )
}

export default CategoryOne;