import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/UpdateProduct.css";

const UpdateProduct = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    imgUrl: '',
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/products/${productId}`);
      setProductData(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleInputChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/products/${productId}`, productData);
      alert(`Product with ID ${productId} updated successfully!`);
    } catch (error) {
      console.error('Error updating product:', error);
      alert(`An error occurred while updating the product: ${error.message}`);
    }
  };

  return (
    <div className="update-product">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="update">
          <label className="label">Title</label>
          <input type="text" name="title" value={productData.title} onChange={handleInputChange} />
        </div>
        <div className="update">
          <label className="label">Description</label>
          <input type="text" name="description" value={productData.description} onChange={handleInputChange} />
        </div>
        <div className="update">
          <label className="label">Category</label>
          <input type="text" name="category" value={productData.category} onChange={handleInputChange} />
        </div>
        <div className="update">
          <label className="label">Price</label>
          <input type="number" name="price" value={productData.price} onChange={handleInputChange} />
        </div>
        <div className="update">
          <label className="label">Image URL</label>
          <input type="text" name="imgUrl" value={productData.imgUrl} onChange={handleInputChange} />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;