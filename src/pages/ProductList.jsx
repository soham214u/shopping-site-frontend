import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard';
import axios from "axios";
import "../styles/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/products/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <section className="box">
        <ul>
          {products.map(product => (
            <li key={product._id}>
              <ProductCard
                productImg={product.imgUrl}
                title={product.title}
                price={product.price}
              />
              <button onClick={() => handleDeleteProduct(product._id)} className="btn">Delete</button>
              <Link to={`/products/${product._id}/update`} className="update-btn">Update</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductList;