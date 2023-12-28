import React, {useEffect, useState} from 'react';
import "../styles/Home.css";
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/product");

  const data = res.data;

  console.log(data);

  return data;
};


const Home = () => {
  const [productData, setProductData] = useState([]);

  const assignData = async () => {
    const fetchedProductData = await fetchProducts();

    setProductData(fetchedProductData);
  }

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div>
      <div className="hero-img">
        <div className="hero-section">
          <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" />
        </div>
      </div>
      <div className="category-div">
        <h2>Categories</h2>
        <section className="categories">
          <CategoryCard categoryText="Smartphones" />
          <CategoryCard categoryText="Headphones" />
          <CategoryCard categoryText="Smartwatches" />
        </section>
      </div>


      <div className="product-div">
        <h2>Products</h2>
        <section className="products">
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
    </div>
  );
};

export default Home;