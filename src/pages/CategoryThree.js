import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import "../styles/CategoryThree.css";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/smartwatches");

  const data = res.data;

  console.log(data);

  return data;
}

const CategoryThree = () => {
  const [productData, setProductData] = useState([]);

  const assignData = async () => {
    const fetchedProductData = await fetchProducts();

    setProductData(fetchedProductData);
  }

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div className="category-three-div">
      <h2>Smartwatches</h2>
      <section className="category-three-products">
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

export default CategoryThree;