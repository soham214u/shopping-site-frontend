import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import "../styles/Shop.css";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/products");

  const data = res.data;

  console.log(data);

  return data;
};

const Shop = () => {
  const [productData, setProductData] = useState([]);

  const assignData = async () => {
    const fetchedProductData = await fetchProducts();

    setProductData(fetchedProductData);
  }

  useEffect(() => {
    assignData();
  }, []);
  
  return (
    <div className="all-product-div">
      <h2>All Products</h2>
      <section className="all-products">
        {
          productData.map((product) => {
            return (
              <li key={product._id}>
                <ProductCard
                  productId={product._id}
                  productImg={product.imgUrl}
                  title={product.title}
                  price={product.price}
                />
              </li>
            )
          })
        }
      </section>
    </div>
  )
}

export default Shop;