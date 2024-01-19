import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import "../styles/CategoryTwo.css";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/headphones");

  const data = res.data;

  console.log(data);

  return data;
}

const CategoryTwo = () => {
  const [productData, setProductData] = useState([]);

  const assignData = async () => {
    const fetchedProductData = await fetchProducts();

    setProductData(fetchedProductData);
  }

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div className="category-two-div">
      <h2>Headphones</h2>
      <section className="category-two-products">
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

export default CategoryTwo;