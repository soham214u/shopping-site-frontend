import React, { useEffect, useState } from 'react';
import ProductDisplay from "../components/ProductDisplay";
import { useParams } from 'react-router-dom';
import axios from "axios";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);

  const fetchProduct = async () => {
    try {
      console.log('Fetching product:', productId);
      const response = await axios.get(`http://localhost:4000/products/${productId}`);
      console.log('Product data:', response.data);
      setProductData([response.data]);
    } catch (error) {
      console.error('Error fetching product:', error);
      setProductData([]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log('Product data:', productData);

  if (!Array.isArray(productData) || productData.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-details">
      {
        productData.map((product) => {
          return (
            <li key={product._id}>
              <ProductDisplay
                productId={product._id}
                productImg={product.imgUrl}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            </li>
          )
        })
      }
    </div>
  );
};

export default ProductDetails;